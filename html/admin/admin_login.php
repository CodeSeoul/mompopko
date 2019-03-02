<?php session_start(); ?>
<?php 
    try
{
    $host = 'mompopkoapi.wcoding.com';
    $user = 'mompopko_admin';
    $password = 'windMarshall92Adult';
    $port = '8833';
    $dbname = 'mompopko';

    $dsn = 'mysql:host='. $host . ';port=' . $port . ';dbname=' . $dbname;

    $pdo = new PDO($dsn, $user, $password);

}
    catch (Exception $e)
{
    die('Error: '. $e->getMessage());
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MomPopKo</title>
    <link rel='stylesheet' href='../../lib/frontend/bootstrap/css/bootstrap.css'>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous">
    <link rel='stylesheet' href='../../styles/business_index.css'>
    <link rel='stylesheet' href='../../styles/dataTrend_index.css'>
</head> 

<body>

    <div id="header"></div>
        <div class="container">
        <div class="row justify-content-center">
            <form action="admin_login.php" id='login_form' method="POST">
                <div class="form-group">
                    <label for="login_id">Log-In ID</label>
                    <input name='login_id' class='form-control' type="login_id" id='login_id' maxlength="21" placeholder="Enter Log-in Id">
                </div>

                <div class="form-group">
                    <label for="pswd">Password</label>
                    <input name='pswd' class='form-control' type="password" id='pswd' maxlength="21" placeholder="Enter Password">
                </div>

                <div class="form-group">
                <input id="login" type="submit" value="Log In">
                    <!-- <label> Remember me : <input type= 'checkbox' name='remember' id='remember' checked > <br/>
                    <button type='submit' class="btn btn-primary">
                        Login
                    </button> -->
                </div>
            </form>
            <div id="error_message">

            </div>
        </div>
    </div>

<?php
    if(!empty($_POST['login_id']) AND !empty($_POST['pswd'])){
        $login_id = $_POST['login_id'];
        $pswd = $_POST['pswd'];
        $req = $pdo->prepare('SELECT login_id, pswd FROM tb_user WHERE login_id = :login_id');
        $req->execute(array(
        'login_id' => $login_id));
        $result = $req->fetch();
        $isPasswordCorrect = ($pswd == $result['pswd'])? true: false;//password_verify($pswd, $result['pswd']);
        
        if($isPasswordCorrect){
            // $_SESSION['login_id'] = $login_id;
            // $_SESSION.gc_maxlifetime = 30;
            
            header ('Location: business_index.html');
        }
        else {
            echo "Your user ID or Password is Incorrect!<br> please Try Again";
            // header ('Location: admin_login.php');

        }
    }
?>

    <script src="../../lib/frontend/jquery/jquery-3.3.1.min.js"></script>
    <script src="../../lib/frontend/popper/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
        crossorigin="anonymous"></script>
    <script src='../../lib/frontend/bootstrap/js/bootstrap.js'></script>

    <script>
        var error_message = document.querySelector('#error_message');
        // error_message.innerHTML = "<b>Your user ID or Password is Incorrect!<br> Please Try Again!</b>";
        var submit = document.querySelector('#login');
        submit.addEventListener('click',function(e){
        // error_message.innerHTML = "";
        var username = document.querySelector('#login_id');
        var password = document.querySelector('#pswd');
        if(username.value == "" || password.value == ""){
                error_message.innerHTML = "Enter a user name and password";
                e.preventDefault();
            }
        });
    </script>

</body>

</html>