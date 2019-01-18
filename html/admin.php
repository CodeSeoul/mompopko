<?php include 'adminHeader.php'?>

<div class="container">

    <div class="row justify-content-center">

        <form action="" method = "POST">

            <div class="form-group">
                <label for="email">Email</label>
                <input class='form-control' type="email" id='email' placeholder="Enter Email">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input class='form-control' type="password" id='password' placeholder="Enter Password">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">
                Login
                </button>
            </div>
            
        </form>

    </div>

</div>

<?php include 'adminFooter.php'?>