
        function login() {
            const username = document.getElementById("username");
            const password = document.getElementById("password");
            const errorMessage = document.getElementById("error-message");

            if (username.value === "admin" && password.value === "123") {
                
                username.value = "";
                password.value = "";

                document.querySelector(".login-container").style.display = "none";
                document.getElementById("loading").style.display = "flex";
                
                setTimeout(() => {
                    window.location.href = "filerieng/22.html";
                }, 3000);

            } else {
                errorMessage.textContent = "Sai tên đăng nhập hoặc mật khẩu!";
            }
        }
        
        window.onload = function() {
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("error-message").textContent = "";
        };
        