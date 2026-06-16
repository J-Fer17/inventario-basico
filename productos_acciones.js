const products = document.querySelector("#products")
const filtro = document.querySelector("#filtro")

let pesitos = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
})

function renderProductos(lista) {
    let productRow = ``

    for (let index = 0; index < lista.length; index++) {
        const p = lista[index]
        const totalStock = p.precio * p.stock

        productRow += `
            <tr class="hover:bg-base-200">
                <td>${p.id}</td>
                <td>${p.nombre}</td>
                <td>${pesitos.format(p.precio)}</td>
                <td>
                    <span class="badge" style="background-color:#E1F5EE; color:#085041; border:none;">${p.categoria}</span>
                </td>
                <td>
                    <span class="badge" style="background-color:#EAF3DE; color:#27500A; border:none;">${p.stock}</span>
                </td>
                <td>${pesitos.format(totalStock)}</td>
            </tr>
        `
    }

    products.innerHTML = productRow
}

function cargarCategorias() {
    // Extrae categorías únicas del arreglo
    const categorias = [...new Set(productosData.map(p => p.categoria))]

    categorias.forEach(cat => {
        const option = document.createElement("option")
        option.value = cat
        option.textContent = cat
        filtro.appendChild(option)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    cargarCategorias()
    renderProductos(productosData)

    filtro.addEventListener("change", () => {
        const seleccion = filtro.value

        if (seleccion === "todas") {
            renderProductos(productosData)
        } else {
            const filtrados = productosData.filter(p => p.categoria === seleccion)
            renderProductos(filtrados)
        }
    })
})