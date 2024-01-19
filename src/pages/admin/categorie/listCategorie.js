import AdminLayout from '../adminLayout/AdminLayout'

function ListCategorie() {
    return (
      <AdminLayout>

<div>
            <h2>Product Categorie</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Nom</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ANTA Blue Premium T-shirt</td>
                            <td>Fashion</td>
                            
                        </tr>
                        <tr>
                            <td>Ab Premium T-shirt</td>
                            <td>Women</td>
                          
                        </tr>
                        {/* ... Additional product rows ... */}
                    </tbody>
                </table>
            </div>
            <button>Add Product</button>
        </div>
      
      </AdminLayout>
    );
  }
  
  export default ListCategorie;