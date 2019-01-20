<?php include 'adminHeader.php'?>

<div class='container mb-5'>

    <form action='#' method='POST'>
        
        <div class='form-group'>
            <label for='level'>Level</label>
            <input type='text' id='level' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='type'>Business type</label>
            <input type='text' id='type' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='category'>Category</label>
            <input type='text' id='category' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='main-category'>Main Category</label>
            <input type='text' id='main-category' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='sub-category1'>Sub Category 1</label>
            <input type='text' id='sub-category1' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='sub-category2'>Sub Category 2</label>
            <input type='text' id='sub-category2' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='opening-date'>Opening Date</label>
            <input type='date' id='opening-date' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='old-address'>Old Address</label>
            <input type='text' id='old-address' class='form-control'>
        </div>
        
        <div class='form-group'>
            <label for='new-address'>New Address</label>
            <input type='text' id='new-address' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='province'>Province</label>
            <input type='text' id='province' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='city'>City</label>
            <input type='text' id='city' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='district'>District</label>
            <input type='text' id='district' class='form-control'>
        </div>

        <div class='form-group'>
            <label for='old-zipcode'>Old Zipcode</label>
            <input type='text' id='old-zipcode' class='form-control'>
        </div>

        <div class="form-group">
            <label for="new-zipcode">New Zipcode</label>
            <input type="text" id= 'new-zipcode' class='form-control'>
        </div>

        <div class="form-group">
            <label for="tel">Telephone</label>
            <input type="text" id='tel' class='form-control'>
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id='email' class='form-control'>
        </div>

        <div class="form-group">
            <label for="operating-hour">Operating hour</label>
            <input type="text" id='operating-hour' class='form-control'>
        </div>

        <div class="form-group">
            <label for="owner-name">Owner Name</label>
            <input type="text" id='owner-name' class='form-control'>
        </div>

        <div class="form-group">
            <label for="interview">Interview</label>
            <textarea type="text" id='interview' class='form-control'></textarea>
        </div>

        <div class="form-group">
            <label for="interview-date">Interview date</label>
            <input type="date" id='interview-date' class='form-control'>
        </div>

        <div class="form-group">
            <label for="website">website url</label>
            <input type="url" id='website' class='form-control'>
        </div>

        <div class="form-group">
            <label for="facebook">Facebook url</label>
            <input type="url" id='facebook' class='form-control'>
        </div>

        <div class="form-group">
            <label for="instagram">Instagram url</label>
            <input type="url" id='instagram' class='form-control'>
        </div>

        <div class="form-group">
            <label for="youtube">Youtube url</label>
            <input type="url" id='youtube' class='form-control'>
        </div>

        <div class="form-group">
            <label for="twitter">Twitter url</label>
            <input type="url" id='twitter' class='form-control'>
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