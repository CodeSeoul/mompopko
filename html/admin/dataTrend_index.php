<?php include 'adminHeader.php'?>

<div class="container business-index">

    <form action="#" class='mb-3' method='POST'>

        <input type="text" placeholder='Search a business'><i class="ml-2 fas fa-search"></i>

    </form>

    <table class="table-bordered text-center table table-striped">

        <thead class='thead-dark'>

            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Post Title</th>
                <th scope='col'>Upload Date</th>
                <th scope='col'>Edit</th>
                <th scope='col'>Delete</th>
            </tr>
        
        </thead>

        <tbody>

            <tr>
                <th scope='row'>1</th>
                <td>Title1</td>
                <td>12/31/2019</td>
                <th><button class="btn btn-warning">Edit</button></th>
                <th><button class="btn btn-dark">Delete</button></th>
            </tr>

            <tr>
            <th scope='row'>2</th>
                <td>Title2</td>
                <td>2/18/2019</td>
                <th><button class="btn btn-warning">Edit</button></th>
                <th><button class="btn btn-dark">Delete</button></th>
            </tr>
        
        </tbody>

    </table>

</div>
    

<?php include 'adminFooter.php'?>