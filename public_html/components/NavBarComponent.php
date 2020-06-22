<?php
    
class NavbarComponent {

    public static function render() {
        $page = basename($_SERVER["SCRIPT_FILENAME"]);
        ?>
        <nav class = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class = "navbar-brand mr-5" href = "#">Navbar</a>
                <button class = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarNavAltMarkup" aria-controls = "navbarNavAltMarkup" aria-expanded = "false" aria-label = "Toggle navigation">
                    <span class = "navbar-toggler-icon"></span>
                </button>
                <div class = "collapse navbar-collapse" id = "navbarNavAltMarkup">
                    <div class = "navbar-nav">
                        <a class = "nav-item nav-link <?= $page == "home.php" ? 'active' : '' ?>" href = "home.php">Home<span class = "sr-only">(current)</span></a>
                        <a class = "nav-item nav-link <?= $page == "loja.php" ? 'active' : '' ?>" href = "loja.php">Loja</a>
                    </div>
                    <div class = "navbar-nav  ml-auto">
                        <a class = "nav-item nav-link centralizar" href = "carrinhoDecompras.php"> <i class = "fas fa-shopping-cart fa-lg"></i> 0</a>
                        <a class = "nav-item  nav-link" href = "minhaConta.php">Minha conta</a>
                    </div>
                </div>
            </div>
        </nav>
        <?php
    }

}
