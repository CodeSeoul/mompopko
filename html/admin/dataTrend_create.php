<?php include 'adminHeader.php'?>

<div class='container mb-5'>

    <form action='#' method='POST'>
        
        <div class='form-group'>
            <label for='title'>Data trend post title</label>
            <input type='text' id='title' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='infographic'>Infographic</label>
            <input type='file' id='infographic' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='description'>Description</label>
            <textarea rows ='20' id='description' class='form-control'></textarea>
        </div>

        <div class="container">
            <div class="row justify-content-end">
                <button type='submit' class='mr-3 btn btn-info'>Preview</button>
                <button class='btn btn-danger'>Cancel</button>
            </div>
        </div>

    </form>

</div>

<?php include 'adminFooter.php'?>