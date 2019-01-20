<?php include 'adminHeader.php'?>

<div class="container business-index">

    <form action="#" class='mb-3' method='POST'>

        <input type="text" placeholder='Search a business'><i class="ml-2 fas fa-search"></i>

    </form>

    <table class="table-bordered text-center table table-striped">

        <thead class='thead-dark'>

            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Business Name</th>
                <th scope='col'>Level</th>
                <th scope='col'>Telephone</th>
                <th class='w-50' scope='col'>New Address</th>
                <th scope='col'>Edit</th>
                <th scope='col'>Delete</th>
                <th scope='col'>Image</th>
            </tr>
        
        </thead>

        <tbody>

            <tr>
                <th scope='row'>1</th>
                <td>Name1</td>
                <td>Level1</td>
                <td>Telephone1</td>
                <td>Address 1</td>
                <th scope='col'><button class="btn btn-warning">Edit</button></th>
                <th scope='col'><button class="btn btn-dark">Delete</button></th>
                <th scope='col'><button class="btn btn-info">Select</button></th>
            </tr>

            <tr>
                <th scope='row'>2</th>
                <td>Name2</td>
                <td>Level2</td>
                <td>Telephone2</td>
                <td>Address 2</td>
                <th scope='col'><button class="btn btn-warning">Edit</button></th>
                <th scope='col'><button class="btn btn-dark">Delete</button></th>
                <th scope='col'><button class="btn btn-info">Select</button></th>
            </tr>
        
        </tbody>

    </table>

</div>
    

<?php include 'adminFooter.php'?>