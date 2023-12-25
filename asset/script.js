
    //datatabel
    let table = new DataTable('#myTable');

    //popper
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })

     // Tambahkan event listener untuk form submit
     document.querySelector('form').addEventListener('submit', function (event) {
        // Lakukan validasi form dengan menggunakan metode checkValidity()
        if (!this.checkValidity()) {
            event.preventDefault(); // Mencegah submit jika form tidak valid
            event.stopPropagation(); // Menghentikan event propagasi
        }
        this.classList.add('was-validated'); // Menandai form telah diverifikasi
    });

    //form data 

    document.querySelector('#submitBtn').addEventListener('click', function (event) {
        var form = document.getElementById('contactForm');
        
        // Trigger the validation
        if (!form.reportValidity()) {
            event.preventDefault(); // Prevent form submission if validation fails
            event.stopPropagation();
        } else {
            // Show loading spinner
            showLoadingSpinner();

            // Simulate form submission delay
            setTimeout(function () {
                // Hide loading spinner
                hideLoadingSpinner();

                // Show the success toast
                showSuccessToast();

                // Reset the form
                form.reset();

                // Remove the 'was-validated' class
                form.classList.remove('was-validated');
            }, 2000); // Simulated delay: 2000 milliseconds (2 seconds)
        }
    });

    // Function to show the loading spinner
    function showLoadingSpinner() {
        var submitButton = document.getElementById('submitBtn');
        submitButton.innerHTML = '<div class="spinner-border spinner-border-sm" role="status"></div> wait...';
        submitButton.disabled = true;
    }

    // Function to hide the loading spinner
    function hideLoadingSpinner() {
        var submitButton = document.getElementById('submitBtn');
        submitButton.innerHTML = 'Kirim';
        submitButton.disabled = false;
    }

    // Function to show the success toast
    function showSuccessToast() {
        var liveToast = new bootstrap.Toast(document.getElementById('liveToast'));
        liveToast.show();
    }

    //alert

     document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    showAlert(); // Show the SweetAlert
  });

  function showAlert() {
    Swal.fire({
      title: 'berhasiil',
      text: 'data berhasil di simpan',
      icon: 'success',
      confirmButtonText: 'OK',
      didClose: () => {
        // Close the modal
        var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.hide();

        // Reset the form
        document.getElementById('myForm').reset();
      }
    });
  }