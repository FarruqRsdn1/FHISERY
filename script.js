document.addEventListener("DOMContentLoaded", () => {
  // Referensi elemen-elemen UI
  const loginPage = document.getElementById("login-page");
  const registerPage = document.getElementById("register-page");
  const mainAppContent = document.getElementById("main-app-content"); // Konten utama
  const profilePage = document.getElementById("profile-page");
  const heroSection = document.getElementById("hero-section");
  const productsSection = document.getElementById("produk");
  const productsGrid = document.getElementById("products-grid");
  const fleetSection = document.getElementById("fleet");
  const fleetTableBody = document.getElementById("fleet-table-body");
  // const scheduleSection = document.getElementById("schedule"); // Dihapus
  // const scheduleTableBody = document.getElementById("schedule-table-body"); // Dihapus

  // Elemen-elemen form login
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginForm = document.querySelector(".login-form");
  const loginMessage = document.getElementById("login-message");
  const showRegisterFormLink = document.getElementById("show-register-form");

  // Elemen-elemen form register
  const regNameInput = document.getElementById("reg-name");
  const regNikInput = document.getElementById("reg-nik");
  const regDobInput = document.getElementById("reg-dob");
  const regAddressInput = document.getElementById("reg-address");
  const regUsernameInput = document.getElementById("reg-username");
  const regPasswordInput = document.getElementById("reg-password");
  const registerForm = document.querySelector(".register-form");
  const registerMessage = document.getElementById("register-message");
  const showLoginFormLink = document.getElementById("show-login-form");

  // Elemen-elemen halaman profil (display mode)
  const profileName = document.getElementById("profile-name");
  const profileNIK = document.getElementById("profile-nik");
  const profileDOB = document.getElementById("profile-dob");
  const profileAddress = document.getElementById("profile-address");
  const profilePhone = document.getElementById("profile-phone"); // New
  const profileEmail = document.getElementById("profile-email"); // New
  const profileUsernameProfile = document.getElementById(
    "profile-username-profile"
  );
  const backToMainBtn = document.getElementById("back-to-main-btn");
  const editProfileBtn = document.getElementById("edit-profile-btn"); // New
  const profileDisplay = document.querySelector(".profile-display"); // New

  // Elemen-elemen halaman profil (edit mode)
  const profileEditForm = document.getElementById("profile-edit-form"); // New
  const editNameInput = document.getElementById("edit-name"); // New
  const editNikInput = document.getElementById("edit-nik"); // New
  const editDobInput = document.getElementById("edit-dob"); // New
  const editAddressInput = document.getElementById("edit-address"); // New
  const editPhoneInput = document.getElementById("edit-phone"); // New
  const editEmailInput = document.getElementById("edit-email"); // New
  const currentPasswordInput = document.getElementById("current-password"); // New
  const newPasswordInput = document.getElementById("new-password"); // New
  const confirmNewPasswordInput = document.getElementById(
    "confirm-new-password"
  ); // New
  const saveProfileBtn = document.querySelector(
    "#edit-profile-form .primary-btn"
  ); // New
  const cancelEditProfileBtn = document.getElementById(
    "cancel-edit-profile-btn"
  ); // New
  const profileFormMessage = document.getElementById("profile-form-message"); // New

  // Tombol logout di header
  const logoutBtn = document.getElementById("logout-btn");
  const profileLink = document.getElementById("profile-link");
  const productsLink = document.getElementById("products-link");
  const fleetLink = document.getElementById("fleet-link");
  // const scheduleLink = document.getElementById("schedule-link"); // Dihapus
  const loggedInUsernameDisplay = document.getElementById("logged-in-username");
  const usernameDisplayContainer = loggedInUsernameDisplay
    ? loggedInUsernameDisplay.parentElement
    : null;

  // Elemen Modal Produk
  const productModal = document.getElementById("product-modal");
  const closeModalButton = productModal.querySelector(".close-button");
  const productForm = document.getElementById("product-form");
  const modalTitle = document.getElementById("modal-title");
  const productIdInput = document.getElementById("product-id");
  const productNameInput = document.getElementById("product-name");
  const productSizeInput = document.getElementById("product-size");
  const productPriceInput = document.getElementById("product-price");
  const productPhotoInput = document.getElementById("product-photo");
  const saveProductBtn = document.getElementById("save-product-btn");
  const productFormMessage = document.getElementById("product-form-message");
  const addProductBtn = document.getElementById("add-product-btn");

  // Elemen Modal Armada
  const fleetModal = document.getElementById("fleet-modal");
  const closeFleetModalButton = fleetModal.querySelector(".close-button-fleet");
  const fleetForm = document.getElementById("fleet-form");
  const fleetModalTitle = document.getElementById("fleet-modal-title");
  const vehicleIdInput = document.getElementById("vehicle-id");
  const vehicleNameInput = document.getElementById("vehicle-name");
  const vehicleTypeInput = document.getElementById("vehicle-type");
  const vehicleCapacityInput = document.getElementById("vehicle-capacity");
  const saveVehicleBtn = document.getElementById("save-vehicle-btn");
  const fleetFormMessage = document.getElementById("fleet-form-message");
  const addVehicleBtn = document.getElementById("add-vehicle-btn");
  const adminOnlyFleetHeader = document.querySelector(".admin-only-header");

  // Elemen Modal Jadwal (Dihapus)
  // const scheduleModal = document.getElementById("schedule-modal");
  // const closeScheduleModalButton = scheduleModal.querySelector(
  //   ".close-button-schedule"
  // );
  // const scheduleForm = document.getElementById("schedule-form");
  // const scheduleModalTitle = document.getElementById("schedule-modal-title");
  // const scheduleIdInput = document.getElementById("schedule-id");
  // const scheduleAddressInput = document.getElementById("schedule-address");
  // const scheduleDateInput = document.getElementById("schedule-date");
  // const scheduleTimeInput = document.getElementById("schedule-time");
  // const scheduleNotesInput = document.getElementById("schedule-notes");
  // const saveScheduleBtn = document.getElementById("save-schedule-btn");
  // const scheduleFormMessage = document.getElementById("schedule-form-message");
  // const addScheduleBtn = document.getElementById("add-schedule-btn");
  // const adminOnlyScheduleHeader = document.querySelector(
  //   ".admin-only-header-schedule"
  // );

  // Elemen Modal Pemesanan (Baru)
  const orderModal = document.getElementById("order-modal");
  const closeOrderModalButton = orderModal.querySelector(".close-button-order");
  const orderForm = document.getElementById("order-form");
  const orderModalTitle = document.getElementById("order-modal-title");
  const orderProductIdInput = document.getElementById("order-product-id");
  const orderRecordIdInput = document.getElementById("order-record-id"); // New: Hidden field for shipping record ID
  const orderProductNameDisplay = document.getElementById(
    "order-product-name-display"
  );
  const orderQuantityInput = document.getElementById("order-quantity"); // New: Quantity input
  const orderPackingInput = document.getElementById("order-packing"); // New: Packing input
  const orderDayInput = document.getElementById("order-delivery-day"); // New: Delivery Day input
  const orderTimeInput = (document = document.getElementById(
    "order-delivery-time"
  )); // New: Delivery Time input
  const orderNameInput = document.getElementById("order-name");
  const orderAddressInput = document.getElementById("order-address");
  const orderPhoneInput = document.getElementById("order-phone");
  const saveOrderBtn = document.getElementById("save-order-btn");
  const orderFormMessage = document.getElementById("order-form-message");

  // Elemen Halaman Pengiriman (Baru)
  const shippingPage = document.getElementById("shipping-page");
  const shippingTableBody = document.getElementById("shipping-table-body");
  const backToMainFromShippingBtn = document.getElementById(
    "back-to-main-from-shipping-btn"
  );
  const startShippingBtn = document.getElementById("start-shipping-btn"); // Tombol "Mulai Pengiriman Sekarang"

  // Elemen Notifikasi Admin (Baru)
  const adminNotificationBox = document.getElementById(
    "admin-notification-box"
  );
  const adminNotificationTitle = document.getElementById(
    "admin-notification-title"
  );
  const adminNotificationContent = document.getElementById(
    "admin-notification-content"
  );
  const adminNotificationCloseBtn = document.getElementById(
    "admin-notification-close-btn"
  );
  const adminNotificationsPage = document.getElementById(
    "admin-notifications-page"
  ); // New: Admin Notifications Page
  const adminNotificationsList = document.getElementById(
    "admin-notifications-list"
  ); // New: List container for admin notifications
  const noNotificationsMessage = document.querySelector(
    ".no-notifications-message"
  ); // New: Message for no notifications
  const backToMainFromAdminNotificationsBtn = document.getElementById(
    "back-to-main-from-admin-notifications-btn"
  ); // New: Back button for admin notifications page
  const adminNotificationsLink = document.getElementById(
    "admin-notifications-link"
  ); // New: Sidebar link for admin notifications
  const adminNotificationsLinkMobile = document.getElementById(
    "admin-notifications-link-mobile"
  ); // New: Mobile header link for admin notifications

  // Kredensial login default (untuk admin)
  const DEFAULT_ADMIN_USERNAME = "admin";
  const DEFAULT_ADMIN_PASSWORD = "123";
  const LOGIN_KEY = "isLoggedIn";
  const LOGGED_IN_USER_DATA_KEY = "loggedInUserData";
  const REGISTERED_USERS_KEY = "registeredUsers";
  const PRODUCTS_KEY = "fishProducts";
  const FLEET_KEY = "fleetData";
  // const SCHEDULES_KEY = "shippingSchedules"; // Dihapus
  const SHIPPING_RECORDS_KEY = "shippingRecords"; // New: Key for shipping records

  // Data produk (akan dimuat dari localStorage)
  let fishProducts = [];

  // Data armada (akan dimuat dari localStorage)
  let fleetData = [];

  // Data jadwal (akan dimuat dari localStorage) (Dihapus)
  // let shippingSchedules = [];

  // Data catatan pengiriman (baru, akan dimuat dari localStorage)
  let shippingRecords = [];

  // Fungsi untuk mendapatkan daftar user terdaftar dari localStorage
  function getRegisteredUsers() {
    const users = localStorage.getItem(REGISTERED_USERS_KEY);
    return users ? JSON.parse(users) : [];
  }

  // Fungsi untuk menyimpan daftar user terdaftar ke localStorage
  function saveRegisteredUsers(users) {
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
  }

  // Fungsi untuk memuat produk dari localStorage
  function loadProducts() {
    const products = localStorage.getItem(PRODUCTS_KEY);
    if (products) {
      fishProducts = JSON.parse(products);
    } else {
      // Data produk default jika belum ada di localStorage
      fishProducts = [
        {
          id: "p1",
          name: "Ikan Nila",
          size: "200-300 gr/ekor",
          price: "Rp 25.000/kg",
          photo: "https://placehold.co/300x200/ADD8E6/000000?text=Ikan+Nila",
          averageWeight: 0.25, // Added average weight in kg
        },
        {
          id: "p2",
          name: "Ikan Lele",
          size: "150-250 gr/ekor",
          price: "Rp 20.000/kg",
          photo: "https://placehold.co/300x200/ADD8E6/000000?text=Ikan+Lele",
          averageWeight: 0.2, // Added average weight in kg
        },
        {
          id: "p3",
          name: "Ikan Gurame",
          size: "400-600 gr/ekor",
          price: "Rp 45.000/kg",
          photo: "https://placehold.co/300x200/ADD8E6/000000?text=Ikan+Gurame",
          averageWeight: 0.5, // Added average weight in kg
        },
        {
          id: "p4",
          name: "Ikan Mas",
          size: "250-350 gr/ekor",
          price: "Rp 30.000/kg",
          photo: "https://placehold.co/300x200/ADD8E6/000000?text=Ikan+Mas",
          averageWeight: 0.3, // Added average weight in kg
        },
        {
          id: "p5",
          name: "Ikan Patin",
          size: "300-400 gr/ekor",
          price: "Rp 28.000/kg",
          photo: "https://placehold.co/300x200/ADD8E6/000000?text=Ikan+Patin",
          averageWeight: 0.35, // Added average weight in kg
        },
        {
          id: "p6",
          name: "Udang Vannamei",
          size: "Size 40/50",
          price: "Rp 70.000/kg",
          photo:
            "https://placehold.co/300x200/ADD8E6/000000?text=Udang+Vannamei",
          averageWeight: 0.02, // Added average weight in kg (approx for shrimp size 40/50)
        },
      ];
      saveProducts(); // Simpan data default ke localStorage
    }
  }

  // Fungsi untuk menyimpan produk ke localStorage
  function saveProducts() {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(fishProducts));
  }

  // Fungsi untuk memuat armada dari localStorage
  function loadFleet() {
    const fleet = localStorage.getItem(FLEET_KEY);
    if (fleet) {
      fleetData = JSON.parse(fleet);
    } else {
      // Data armada default jika belum ada di localStorage
      fleetData = [
        {
          id: "v1",
          name: "Truck Pendingin A",
          type: "Truk Box Pendingin",
          capacity: "5000",
        },
        {
          id: "v2",
          name: "Van Pendingin B",
          type: "Van Pendingin",
          capacity: "1500",
        },
        { id: "v3", name: "Pickup Box C", type: "Pickup Box", capacity: "800" },
        {
          id: "v4",
          name: "Truck Jumbo D",
          type: "Truk Kontainer Pendingin",
          capacity: "10000",
        },
        { id: "v5", name: "Van Kecil E", type: "Van Standar", capacity: "500" },
      ];
      saveFleet(); // Simpan data default ke localStorage
    }
  }

  // Fungsi untuk menyimpan armada ke localStorage
  function saveFleet() {
    localStorage.setItem(FLEET_KEY, JSON.stringify(fleetData));
  }

  // Fungsi untuk memuat jadwal dari localStorage (Dihapus)
  /*
  function loadSchedules() {
    const schedules = localStorage.getItem(SCHEDULES_KEY);
    if (schedules) {
      shippingSchedules = JSON.parse(schedules);
    } else {
      // Data jadwal default jika belum ada di localStorage
      shippingSchedules = [
        {
          id: "s1",
          address: "Jl. Merdeka No. 10, Bandung",
          date: "2025-07-15",
          time: "08:00",
          notes: "Pengiriman ikan Nila, truk pendingin",
        },
        {
          id: "s2",
          address: "Jl. Asia Afrika No. 5, Jakarta",
          date: "2025-07-16",
          time: "10:30",
          notes: "Pengiriman udang, van pendingin",
        },
        {
          id: "s3",
          address: "Jl. Sudirman No. 20, Surabaya",
          date: "2025-07-17",
          time: "14:00",
          notes: "Pengiriman ikan Lele, pickup box",
        },
      ];
      saveSchedules(); // Simpan data default ke localStorage
    }
  }
  */

  // Fungsi untuk menyimpan jadwal ke localStorage (Dihapus)
  /*
  function saveSchedules() {
    localStorage.setItem(SCHEDULES_KEY, JSON.stringify(shippingSchedules));
  }
  */

  // Fungsi untuk memuat catatan pengiriman dari localStorage (baru)
  function loadShippingRecords() {
    const records = localStorage.getItem(SHIPPING_RECORDS_KEY);
    if (records) {
      shippingRecords = JSON.parse(records);
    } else {
      shippingRecords = []; // Default empty array
      saveShippingRecords();
    }
  }

  // Fungsi untuk menyimpan catatan pengiriman ke localStorage (baru)
  function saveShippingRecords() {
    localStorage.setItem(SHIPPING_RECORDS_KEY, JSON.stringify(shippingRecords));
  }

  // Fungsi untuk memeriksa apakah pengguna yang login adalah admin
  function isAdminLoggedIn() {
    const loggedInUserData = JSON.parse(
      sessionStorage.getItem(LOGGED_IN_USER_DATA_KEY)
    );
    return (
      loggedInUserData && loggedInUserData.username === DEFAULT_ADMIN_USERNAME
    );
  }

  // Fungsi untuk menampilkan pesan ke pengguna (untuk login/register)
  function showMessage(element, message, isError = true) {
    element.textContent = message;
    element.classList.remove("error", "success");
    element.classList.add(isError ? "error" : "success");
  }

  // Fungsi untuk menampilkan pesan umum aplikasi (e.g., logout, contact form success)
  function displayAppMessage(message, isError = false) {
    const appMessageElement = document.getElementById("app-message");
    if (appMessageElement) {
      appMessageElement.textContent = message;
      appMessageElement.classList.remove("hidden", "error", "success");
      appMessageElement.classList.add(isError ? "error" : "success");

      // Sembunyikan pesan setelah beberapa detik
      setTimeout(() => {
        appMessageElement.classList.add("hidden");
        appMessageElement.textContent = "";
      }, 3000); // Pesan akan hilang setelah 3 detik
    }
  }

  // Fungsi untuk menampilkan notifikasi admin (baru)
  function displayAdminNotification(title, content) {
    if (adminNotificationBox) {
      adminNotificationTitle.textContent = title;
      adminNotificationContent.innerHTML = content; // Use innerHTML for formatted content
      adminNotificationBox.classList.remove("hidden");
    }
  }

  // Event listener untuk tombol tutup notifikasi admin
  if (adminNotificationCloseBtn) {
    adminNotificationCloseBtn.addEventListener("click", () => {
      adminNotificationBox.classList.add("hidden");
    });
  }

  // Fungsi untuk menampilkan halaman utama aplikasi (selain profil, produk, armada, dan jadwal)
  function showMainContent() {
    // Sembunyikan semua section yang mungkin aktif
    profilePage.classList.add("hidden");
    productsSection.classList.add("hidden");
    fleetSection.classList.add("hidden");
    // scheduleSection.classList.add("hidden"); // Dihapus
    shippingPage.classList.add("hidden"); // Sembunyikan halaman pengiriman
    adminNotificationsPage.classList.add("hidden"); // Sembunyikan halaman notifikasi admin

    // Tampilkan bagian-bagian utama website
    heroSection.style.display = "block";
    document.getElementById("layanan").style.display = "block";
    document.getElementById("kontak").style.display = "block";
  }

  // Fungsi untuk menampilkan halaman profil
  function showProfileContent() {
    // Sembunyikan semua section yang mungkin aktif
    productsSection.classList.add("hidden");
    fleetSection.classList.add("hidden");
    // scheduleSection.classList.add("hidden"); // Dihapus
    shippingPage.classList.add("hidden"); // Sembunyikan halaman pengiriman
    adminNotificationsPage.classList.add("hidden"); // Sembunyikan halaman notifikasi admin
    heroSection.style.display = "none";
    document.getElementById("layanan").style.display = "none";
    document.getElementById("kontak").style.display = "none";

    profilePage.classList.remove("hidden");
    displayUserProfile();
    toggleProfileEditMode(false); // Pastikan mode tampilan aktif secara default
  }

  // Fungsi untuk menampilkan halaman produk
  function showProductsContent() {
    // Sembunyikan semua section yang mungkin aktif
    profilePage.classList.add("hidden");
    fleetSection.classList.add("hidden");
    // scheduleSection.classList.add("hidden"); // Dihapus
    shippingPage.classList.add("hidden"); // Sembunyikan halaman pengiriman
    adminNotificationsPage.classList.add("hidden"); // Sembunyikan halaman notifikasi admin
    heroSection.style.display = "none";
    document.getElementById("layanan").style.display = "none";
    document.getElementById("kontak").style.display = "none";

    productsSection.classList.remove("hidden");
    renderProducts(); // Render produk
  }

  // Fungsi untuk menampilkan halaman armada
  function showFleetContent() {
    // Sembunyikan semua section yang mungkin aktif
    profilePage.classList.add("hidden");
    productsSection.classList.add("hidden");
    // scheduleSection.classList.add("hidden"); // Dihapus
    shippingPage.classList.add("hidden"); // Sembunyikan halaman pengiriman
    adminNotificationsPage.classList.add("hidden"); // Sembunyikan halaman notifikasi admin
    heroSection.style.display = "none";
    document.getElementById("layanan").style.display = "none";
    document.getElementById("kontak").style.display = "none";

    fleetSection.classList.remove("hidden");
    renderFleet(); // Render armada
  }

  // Fungsi untuk menampilkan halaman jadwal (Dihapus)
  /*
  function showScheduleContent() {
    // Sembunyikan semua section yang mungkin aktif
    profilePage.classList.add("hidden");
    productsSection.classList.add("hidden");
    fleetSection.classList.add("hidden");
    shippingPage.classList.add("hidden"); // Sembunyikan halaman pengiriman
    adminNotificationsPage.classList.add("hidden"); // Sembunyikan halaman notifikasi admin
    heroSection.style.display = "none";
    document.getElementById("layanan").style.display = "none";
    document.getElementById("kontak").style.display = "none";

    // Halaman Jadwal Angkut hanya untuk Admin
    if (!isAdminLoggedIn()) {
      displayAppMessage("Anda tidak memiliki akses ke halaman ini.", true);
      showMainContent(); // Redirect ke halaman utama
      return;
    }

    scheduleSection.classList.remove("hidden"); // Tampilkan halaman jadwal
    renderSchedules(); // Render jadwal
  }
  */

  // Fungsi untuk menampilkan halaman pengiriman (baru)
  function showShippingContent() {
    // Sembunyikan semua section yang mungkin aktif
    profilePage.classList.add("hidden");
    productsSection.classList.add("hidden");
    fleetSection.classList.add("hidden");
    // scheduleSection.classList.add("hidden"); // Dihapus
    adminNotificationsPage.classList.add("hidden"); // Sembunyikan halaman notifikasi admin
    heroSection.style.display = "none";
    document.getElementById("layanan").style.display = "none";
    document.getElementById("kontak").style.display = "none";

    shippingPage.classList.remove("hidden"); // Tampilkan halaman pengiriman
    renderShippingRecords(); // Render catatan pengiriman
  }

  // Fungsi untuk menampilkan halaman notifikasi admin (baru)
  function showAdminNotificationsPage() {
    // Sembunyikan semua section yang mungkin aktif
    profilePage.classList.add("hidden");
    productsSection.classList.add("hidden");
    fleetSection.classList.add("hidden");
    // scheduleSection.classList.add("hidden"); // Dihapus
    shippingPage.classList.add("hidden");
    heroSection.style.display = "none";
    document.getElementById("layanan").style.display = "none";
    document.getElementById("kontak").style.display = "none";

    adminNotificationsPage.classList.remove("hidden"); // Tampilkan halaman notifikasi admin
    renderAdminNotifications(); // Render notifikasi
  }

  // Fungsi untuk memperbarui UI berdasarkan status login
  function updateUI() {
    const isLoggedIn = sessionStorage.getItem(LOGIN_KEY) === "true";
    const loggedInUserData = JSON.parse(
      sessionStorage.getItem(LOGGED_IN_USER_DATA_KEY)
    );
    const isAdmin = isAdminLoggedIn();

    if (isLoggedIn) {
      loginPage.classList.add("hidden");
      registerPage.classList.add("hidden");
      mainAppContent.classList.remove("hidden"); // Tampilkan konten utama

      // Tampilkan username di navigasi
      if (loggedInUsernameDisplay && usernameDisplayContainer) {
        loggedInUsernameDisplay.textContent = loggedInUserData
          ? loggedInUserData.username
          : "";
        usernameDisplayContainer.classList.remove("hidden");
      }

      // Tampilkan/sembunyikan tombol tambah produk untuk admin
      if (addProductBtn) {
        if (isAdmin) {
          addProductBtn.classList.remove("hidden");
        } else {
          addProductBtn.classList.add("hidden");
        }
      }

      // Tampilkan/sembunyikan tombol tambah kendaraan untuk admin
      if (addVehicleBtn) {
        if (isAdmin) {
          addVehicleBtn.classList.remove("hidden");
          if (adminOnlyFleetHeader)
            adminOnlyFleetHeader.classList.remove("hidden"); // Show header for actions
        } else {
          addVehicleBtn.classList.add("hidden");
          if (adminOnlyFleetHeader)
            adminOnlyFleetHeader.classList.add("hidden"); // Hide header for actions
        }
      }

      // Tampilkan/sembunyikan tombol tambah jadwal untuk admin (Dihapus)
      /*
      if (addScheduleBtn) {
        if (isAdmin) {
          addScheduleBtn.classList.remove("hidden");
          if (adminOnlyScheduleHeader)
            adminOnlyScheduleHeader.classList.remove("hidden"); // Show header for actions
        } else {
          addScheduleBtn.classList.add("hidden");
          if (adminOnlyScheduleHeader)
            adminOnlyScheduleHeader.classList.add("hidden"); // Hide header for actions
        }
      }
      */

      // Tampilkan/sembunyikan link notifikasi admin
      if (adminNotificationsLink) {
        if (isAdmin) {
          adminNotificationsLink.classList.remove("hidden");
        } else {
          adminNotificationsLink.classList.add("hidden");
        }
      }
      if (adminNotificationsLinkMobile) {
        if (isAdmin) {
          adminNotificationsLinkMobile.classList.remove("hidden");
        } else {
          adminNotificationsLinkMobile.classList.add("hidden");
        }
      }

      // Sembunyikan link Jadwal Angkut untuk non-admin (Dihapus)
      /*
      if (scheduleLink) {
        if (isAdmin) {
          scheduleLink.classList.remove("hidden");
        } else {
          scheduleLink.classList.add("hidden");
        }
      }
      // Sembunyikan link Jadwal Angkut mobile untuk non-admin
      const scheduleLinkMobile = document.getElementById("schedule-link-mobile"); // Get the mobile link reference
      if (scheduleLinkMobile) {
        if (isAdmin) {
          scheduleLinkMobile.classList.remove("hidden");
        } else {
          scheduleLinkMobile.classList.add("hidden");
        }
      }
      */

      showMainContent(); // Pastikan konten utama ditampilkan setelah login
    } else {
      loginPage.classList.remove("hidden");
      registerPage.classList.add("hidden");
      mainAppContent.classList.add("hidden"); // Sembunyikan konten utama
      profilePage.classList.add("hidden");
      productsSection.classList.add("hidden");
      fleetSection.classList.add("hidden");
      // scheduleSection.classList.add("hidden"); // Dihapus
      shippingPage.classList.add("hidden"); // Sembunyikan halaman pengiriman
      adminNotificationsPage.classList.add("hidden"); // Sembunyikan halaman notifikasi admin
      document.title = "AquaLogistics - Login";

      // Sembunyikan username di navigasi
      if (loggedInUsernameDisplay && usernameDisplayContainer) {
        loggedInUsernameDisplay.textContent = "";
        usernameDisplayContainer.classList.add("hidden");
      }

      // Sembunyikan tombol tambah produk jika tidak login
      if (addProductBtn) {
        addProductBtn.classList.add("hidden");
      }

      // Sembunyikan tombol tambah kendaraan jika tidak login
      if (addVehicleBtn) {
        addVehicleBtn.classList.add("hidden");
        if (adminOnlyFleetHeader) adminOnlyFleetHeader.classList.add("hidden");
      }

      // Sembunyikan tombol tambah jadwal jika tidak login (Dihapus)
      /*
      if (addScheduleBtn) {
        addScheduleBtn.classList.add("hidden");
        if (adminOnlyScheduleHeader)
          adminOnlyScheduleHeader.classList.add("hidden");
      }
      */

      // Sembunyikan link notifikasi admin
      if (adminNotificationsLink) {
        adminNotificationsLink.classList.add("hidden");
      }
      if (adminNotificationsLinkMobile) {
        adminNotificationsLinkMobile.classList.add("hidden");
      }

      // Sembunyikan link Jadwal Angkut untuk non-admin (Dihapus)
      /*
      if (scheduleLink) {
        scheduleLink.classList.add("hidden");
      }
      const scheduleLinkMobile = document.getElementById("schedule-link-mobile"); // Get the mobile link reference
      if (scheduleLinkMobile) {
        scheduleLinkMobile.classList.add("hidden");
      }
      */
    }
  }

  // Fungsi untuk menampilkan halaman pendaftaran
  function showRegisterPage() {
    loginPage.classList.add("hidden");
    registerPage.classList.remove("hidden");
    mainAppContent.classList.add("hidden"); // Sembunyikan konten utama
    profilePage.classList.add("hidden");
    productsSection.classList.add("hidden");
    fleetSection.classList.add("hidden");
    // scheduleSection.classList.add("hidden"); // Dihapus
    shippingPage.classList.add("hidden"); // Sembunyikan halaman pengiriman
    adminNotificationsPage.classList.add("hidden"); // Sembunyikan halaman notifikasi admin
    registerForm.reset();
    registerMessage.textContent = "";
  }

  // Fungsi untuk menampilkan halaman login
  function showLoginPage() {
    loginPage.classList.remove("hidden");
    registerPage.classList.add("hidden");
    mainAppContent.classList.add("hidden"); // Sembunyikan konten utama
    profilePage.classList.add("hidden");
    productsSection.classList.add("hidden");
    fleetSection.classList.add("hidden");
    // scheduleSection.classList.add("hidden"); // Dihapus
    shippingPage.classList.add("hidden"); // Sembunyikan halaman pengiriman
    adminNotificationsPage.classList.add("hidden"); // Sembunyikan halaman notifikasi admin
    loginForm.reset();
    loginMessage.textContent = "";
  }

  // Fungsi untuk menampilkan data profil pengguna yang sedang login
  function displayUserProfile() {
    const userData = JSON.parse(
      sessionStorage.getItem(LOGGED_IN_USER_DATA_KEY)
    );

    if (userData) {
      profileName.textContent = userData.name || "-";
      profileNIK.textContent = userData.nik || "-";
      profileDOB.textContent = userData.dob || "-";
      profileAddress.textContent = userData.address || "-";
      profilePhone.textContent = userData.phone || "-"; // New
      profileEmail.textContent = userData.email || "-"; // New
      profileUsernameProfile.textContent = userData.username || "-";

      // Isi form edit dengan data saat ini
      editNameInput.value = userData.name || "";
      editNikInput.value = userData.nik || "";
      editDobInput.value = userData.dob || "";
      editAddressInput.value = userData.address || "";
      editPhoneInput.value = userData.phone || ""; // New
      editEmailInput.value = userData.email || ""; // New
      currentPasswordInput.value = ""; // Clear password fields
      newPasswordInput.value = "";
      confirmNewPasswordInput.value = "";
      profileFormMessage.textContent = ""; // Clear any previous messages
    } else {
      profileName.textContent = "Tidak tersedia";
      profileNIK.textContent = "Tidak tersedia";
      profileDOB.textContent = "Tidak tersedia";
      profileAddress.textContent = "Tidak tersedia";
      profilePhone.textContent = "Tidak tersedia"; // New
      profileEmail.textContent = "Tidak tersedia"; // New
      profileUsernameProfile.textContent = "Tidak tersedia";
    }
  }

  // Fungsi untuk beralih antara mode tampilan profil dan mode edit
  function toggleProfileEditMode(isEditMode) {
    if (isEditMode) {
      profileDisplay.classList.add("hidden");
      profileEditForm.classList.remove("hidden");
    } else {
      profileDisplay.classList.remove("hidden");
      profileEditForm.classList.add("hidden");
      displayUserProfile(); // Refresh display with current data
    }
  }

  // Fungsi untuk merender produk ikan
  function renderProducts() {
    productsGrid.innerHTML = ""; // Clear previous content
    const isAdmin = isAdminLoggedIn();

    fishProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.dataset.productId = product.id; // Store product ID in dataset

      let adminActionsHtml = "";
      if (isAdmin) {
        adminActionsHtml = `
                    <div class="admin-actions">
                        <button class="btn edit-btn" data-id="${product.id}">Edit</button>
                        <button class="btn delete-btn" data-id="${product.id}">Hapus</button>
                    </div>
                `;
      }

      productCard.innerHTML = `
                <img src="${product.photo}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/000000?text=Gambar+Tidak+Tersedia';">
                <h3>${product.name}</h3>
                <p>Ukuran: ${product.size}</p>
                <p class="price">Harga: ${product.price}</p>
                ${adminActionsHtml}
            `;
      productsGrid.appendChild(productCard);

      // Add click listener for non-admin users to open order modal
      if (!isAdmin) {
        productCard.addEventListener("click", () => {
          openOrderModal(product);
        });
      }
    });
  }

  // Fungsi untuk merender data armada
  function renderFleet() {
    fleetTableBody.innerHTML = ""; // Clear previous content
    const isAdmin = isAdminLoggedIn();

    fleetData.forEach((vehicle) => {
      const row = document.createElement("tr");
      row.dataset.vehicleId = vehicle.id; // Store vehicle ID in dataset

      let adminActionsHtml = "";
      if (isAdmin) {
        adminActionsHtml = `
                    <td class="admin-actions">
                        <button class="btn edit-btn" data-id="${vehicle.id}">Edit</button>
                        <button class="btn delete-btn" data-id="${vehicle.id}">Hapus</button>
                    </td>
                `;
      } else {
        adminActionsHtml = '<td class="admin-actions hidden"></td>'; // Hidden cell for non-admins
      }

      row.innerHTML = `
                <td>${vehicle.name}</td>
                <td>${vehicle.type}</td>
                <td>${vehicle.capacity} kg</td>
                ${adminActionsHtml}
            `;
      fleetTableBody.appendChild(row);
    });

    // Ensure the header visibility matches the admin status after rendering
    if (adminOnlyFleetHeader) {
      if (isAdmin) {
        adminOnlyFleetHeader.classList.remove("hidden");
      } else {
        adminOnlyFleetHeader.classList.add("hidden");
      }
    }
  }

  // Fungsi untuk merender data jadwal (Dihapus)
  /*
  function renderSchedules() {
    scheduleTableBody.innerHTML = ""; // Clear previous content
    const isAdmin = isAdminLoggedIn();

    shippingSchedules.forEach((schedule) => {
      const row = document.createElement("tr");
      row.dataset.scheduleId = schedule.id; // Store schedule ID in dataset

      let adminActionsHtml = "";
      if (isAdmin) {
        adminActionsHtml = `
                    <td class="admin-actions">
                        <button class="btn edit-btn" data-id="${schedule.id}">Edit</button>
                        <button class="btn delete-btn" data-id="${schedule.id}">Hapus</button>
                    </td>
                `;
      } else {
        adminActionsHtml = '<td class="admin-actions hidden"></td>'; // Hidden cell for non-admins
      }

      row.innerHTML = `
                <td>${schedule.address}</td>
                <td>${schedule.date}</td>
                <td>${schedule.time}</td>
                <td>${schedule.notes}</td>
                ${adminActionsHtml}
            `;
      scheduleTableBody.appendChild(row);
    });

    // Ensure the header visibility matches the admin status after rendering
    if (adminOnlyScheduleHeader) {
      if (isAdmin) {
        adminOnlyScheduleHeader.classList.remove("hidden");
      } else {
        adminOnlyScheduleHeader.classList.add("hidden");
      }
    }
  }
  */

  // Fungsi untuk merender catatan pengiriman (baru)
  function renderShippingRecords() {
    shippingTableBody.innerHTML = ""; // Clear previous content
    const isAdmin = isAdminLoggedIn(); // Check admin status

    if (shippingRecords.length === 0) {
      const noRecordsRow = document.createElement("tr");
      noRecordsRow.innerHTML = `<td colspan="10" style="text-align: center; padding: 20px;">Belum ada catatan pengiriman.</td>`; // Updated colspan
      shippingTableBody.appendChild(noRecordsRow);
      return;
    }

    shippingRecords.forEach((record) => {
      const row = document.createElement("tr");
      row.dataset.recordId = record.id; // Store record ID in dataset

      let actionButtons = ``; // Initialize empty for non-admins

      // Only show edit/delete/set schedule buttons if admin
      if (isAdmin) {
        actionButtons += `
          <button class="btn edit-btn" data-id="${record.id}">Edit</button>
          <button class="btn delete-btn" data-id="${record.id}">Batal</button>
        `;
        if (!record.isScheduled) {
          // Only show if not yet scheduled
          actionButtons += `<button class="btn primary-btn set-schedule-btn" data-id="${record.id}">Atur Jadwal</button>`;
        }
      } else {
        // For regular users, only show the "Batal" button if the order is not yet scheduled
        // This allows users to cancel pending orders
        if (!record.isScheduled) {
          actionButtons += `<button class="btn delete-btn" data-id="${record.id}">Batal</button>`;
        }
      }

      const statusText = record.isScheduled
        ? "Jadwal Terkirim"
        : "Menunggu Jadwal";
      const statusClass = record.isScheduled
        ? "status-scheduled"
        : "status-pending";

      row.innerHTML = `
                <td>${record.customerName}</td>
                <td>${record.customerAddress}</td>
                <td>${record.customerPhone}</td>
                <td>${record.productName}</td>
                <td>${record.quantity} kg</td>
                <td>${record.packing}</td>
                <td>${record.deliveryDay || "-"}</td>
                <td>${record.deliveryTime || "-"}</td>
                <td><span class="status ${statusClass}">${statusText}</span></td>
                <td class="shipping-actions">
                    ${actionButtons}
                </td>
            `;
      shippingTableBody.appendChild(row);
    });
  }

  // Fungsi untuk merender notifikasi admin (baru)
  function renderAdminNotifications() {
    adminNotificationsList.innerHTML = ""; // Clear previous content

    const newOrders = shippingRecords.filter((record) => !record.readByAdmin); // Filter for unread notifications

    if (newOrders.length === 0) {
      noNotificationsMessage.classList.remove("hidden");
    } else {
      noNotificationsMessage.classList.add("hidden");
      // Sort by orderDate (newest first)
      newOrders.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));

      newOrders.forEach((record) => {
        const notificationCard = document.createElement("div");
        notificationCard.classList.add("notification-card");
        notificationCard.dataset.recordId = record.id;
        notificationCard.innerHTML = `
          <h3>Pesanan Baru: ${record.productName} (${record.quantity} kg)</h3>
          <p><strong>Dari:</strong> ${record.customerName}</p>
          <p><strong>Alamat:</strong> ${record.customerAddress}</p>
          <p><strong>Telepon:</strong> ${record.customerPhone}</p>
          <p><strong>Packing:</strong> ${record.packing}</p>
          <p><strong>Pengiriman:</strong> ${record.deliveryDay} pukul ${record.deliveryTime}</p>
          <p class="notification-date">Dipesan pada: ${record.orderDate}</p>
          <button class="btn primary-btn mark-as-read-btn" data-id="${record.id}">Tandai Sudah Dibaca</button>
        `;
        adminNotificationsList.appendChild(notificationCard);
      });
    }
  }

  // Event delegation for "Mark as Read" button on admin notifications
  if (adminNotificationsList) {
    adminNotificationsList.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("mark-as-read-btn")) {
        const recordId = target.dataset.id;
        const recordIndex = shippingRecords.findIndex((r) => r.id === recordId);
        if (recordIndex !== -1) {
          shippingRecords[recordIndex].readByAdmin = true; // Mark as read
          saveShippingRecords();
          renderAdminNotifications(); // Re-render to remove the marked notification
          displayAppMessage("Notifikasi ditandai sudah dibaca.", false);
        }
      }
    });
  }

  // Fungsi untuk membuka modal produk (tambah/edit)
  function openProductModal(product = null) {
    productForm.reset();
    productFormMessage.textContent = ""; // Clear form message
    productIdInput.value = ""; // Reset ID

    if (product) {
      modalTitle.textContent = "Edit Produk";
      productIdInput.value = product.id;
      productNameInput.value = product.name;
      productSizeInput.value = product.size;
      productPriceInput.value = product.price;
      productPhotoInput.value = product.photo;
    } else {
      modalTitle.textContent = "Tambah Produk Baru";
    }
    productModal.classList.remove("hidden");
  }

  // Fungsi untuk menutup modal produk
  function closeProductModal() {
    productModal.classList.add("hidden");
  }

  // Fungsi untuk menambah atau mengedit produk
  productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = productIdInput.value;
    const name = productNameInput.value.trim();
    const size = productSizeInput.value.trim();
    const price = productPriceInput.value.trim();
    const photo = productPhotoInput.value.trim();

    if (!name || !size || !price || !photo) {
      showMessage(productFormMessage, "Semua kolom harus diisi.", true);
      return;
    }

    if (id) {
      // Edit produk
      const productIndex = fishProducts.findIndex((p) => p.id === id);
      if (productIndex !== -1) {
        fishProducts[productIndex] = {
          id,
          name,
          size,
          price,
          photo,
          averageWeight: fishProducts[productIndex].averageWeight,
        }; // Preserve averageWeight
        displayAppMessage("Produk berhasil diupdate!", false);
      }
    } else {
      // Tambah produk baru
      const newProduct = {
        id: "p" + Date.now(), // Simple unique ID
        name,
        size,
        price,
        photo,
        averageWeight: 0.1, // Default average weight for new products, can be edited later
      };
      fishProducts.push(newProduct);
      displayAppMessage("Produk baru berhasil ditambahkan!", false);
    }

    saveProducts();
    renderProducts();
    closeProductModal();
  });

  // Fungsi untuk membuka modal armada (tambah/edit)
  function openFleetModal(vehicle = null) {
    fleetForm.reset();
    fleetFormMessage.textContent = ""; // Clear form message
    vehicleIdInput.value = ""; // Reset ID

    if (vehicle) {
      fleetModalTitle.textContent = "Edit Kendaraan";
      vehicleIdInput.value = vehicle.id;
      vehicleNameInput.value = vehicle.name;
      vehicleTypeInput.value = vehicle.type;
      vehicleCapacityInput.value = vehicle.capacity;
    } else {
      fleetModalTitle.textContent = "Tambah Kendaraan Baru";
    }
    fleetModal.classList.remove("hidden");
  }

  // Fungsi untuk menutup modal armada
  function closeFleetModal() {
    fleetModal.classList.add("hidden");
  }

  // Fungsi untuk menambah atau mengedit kendaraan
  fleetForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = vehicleIdInput.value;
    const name = vehicleNameInput.value.trim();
    const type = vehicleTypeInput.value.trim();
    const capacity = vehicleCapacityInput.value.trim();

    if (!name || !type || !capacity) {
      showMessage(fleetFormMessage, "Semua kolom harus diisi.", true);
      return;
    }

    if (isNaN(capacity) || parseInt(capacity) <= 0) {
      showMessage(fleetFormMessage, "Kapasitas harus angka positif.", true);
      return;
    }

    if (id) {
      // Edit kendaraan
      const vehicleIndex = fleetData.findIndex((v) => v.id === id);
      if (vehicleIndex !== -1) {
        fleetData[vehicleIndex] = { id, name, type, capacity: capacity };
        displayAppMessage("Kendaraan berhasil diupdate!", false);
      }
    } else {
      // Tambah kendaraan baru
      const newVehicle = {
        id: "v" + Date.now(), // Simple unique ID
        name,
        type,
        capacity: capacity,
      };
      fleetData.push(newVehicle);
      displayAppMessage("Kendaraan baru berhasil ditambahkan!", false);
    }

    saveFleet();
    renderFleet();
    closeFleetModal();
  });

  // Fungsi untuk membuka modal jadwal (Dihapus)
  /*
  function openScheduleModal(schedule = null) {
    scheduleForm.reset();
    scheduleFormMessage.textContent = ""; // Clear form message
    scheduleIdInput.value = ""; // Reset ID

    if (schedule) {
      scheduleModalTitle.textContent = "Edit Jadwal";
      scheduleIdInput.value = schedule.id;
      scheduleAddressInput.value = schedule.address;
      scheduleDateInput.value = schedule.date;
      scheduleTimeInput.value = schedule.time;
      scheduleNotesInput.value = schedule.notes;
    } else {
      modalTitle.textContent = "Tambah Jadwal Baru";
    }
    scheduleModal.classList.remove("hidden");
  }
  */

  // Fungsi untuk menutup modal jadwal (Dihapus)
  /*
  function closeScheduleModal() {
    scheduleModal.classList.add("hidden");
  }
  */

  // Fungsi untuk menambah atau mengedit jadwal (Dihapus)
  /*
  scheduleForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = scheduleIdInput.value;
    const address = scheduleAddressInput.value.trim();
    const date = scheduleDateInput.value;
    const time = scheduleTimeInput.value;
    const notes = scheduleNotesInput.value.trim();

    if (!address || !date || !time || !notes) {
      showMessage(scheduleFormMessage, "Semua kolom harus diisi.", true);
      return;
    }

    if (id) {
      // Edit jadwal
      const scheduleIndex = shippingSchedules.findIndex((s) => s.id === id);
      if (scheduleIndex !== -1) {
        shippingSchedules[scheduleIndex] = { id, address, date, time, notes };
        displayAppMessage("Jadwal berhasil diupdate!", false);
      }
    } else {
      // Tambah jadwal baru
      const newSchedule = {
        id: "s" + Date.now(), // Simple unique ID
        address,
        date,
        time,
        notes,
      };
      shippingSchedules.push(newSchedule);
      displayAppMessage("Jadwal baru berhasil ditambahkan!", false);
    }

    saveSchedules();
    renderSchedules();
    closeScheduleModal();
  });
  */

  // Fungsi untuk membuka modal pemesanan (baru)
  function openOrderModal(
    data = null,
    isEdit = false,
    isSchedulingEdit = false
  ) {
    orderForm.reset();
    orderFormMessage.textContent = ""; // Clear form message
    orderProductIdInput.value = ""; // Reset product ID
    orderRecordIdInput.value = ""; // Reset record ID

    if (isEdit && data) {
      // Edit mode for shipping record
      orderModalTitle.textContent = "Edit Pesanan";
      orderRecordIdInput.value = data.id; // Set record ID for editing
      orderProductIdInput.value = data.productId || ""; // Set product ID if available
      orderProductNameDisplay.value = data.productName || "";
      orderQuantityInput.value = data.quantity || "";
      orderPackingInput.value = data.packing || "plastik";
      orderDayInput.value = data.deliveryDay || "";
      orderTimeInput.value = data.deliveryTime || "";
      orderNameInput.value = data.customerName || "";
      orderAddressInput.value = data.customerAddress || "";
      orderPhoneInput.value = data.customerPhone || "";
      saveOrderBtn.textContent = "Simpan Perubahan";
    } else if (isSchedulingEdit && data) {
      // New: For admin to set schedule
      orderModalTitle.textContent = "Atur Jadwal Pengiriman";
      orderRecordIdInput.value = data.id;
      orderProductIdInput.value = data.productId || "";
      orderProductNameDisplay.value = data.productName || "";
      orderQuantityInput.value = data.quantity || "";
      orderPackingInput.value = data.packing || "plastik";
      orderDayInput.value = data.deliveryDay || "";
      orderTimeInput.value = data.deliveryTime || "";
      orderNameInput.value = data.customerName || "";
      orderAddressInput.value = data.customerAddress || "";
      orderPhoneInput.value = data.customerPhone || "";
      saveOrderBtn.textContent = "Simpan Jadwal & Beri Notifikasi";

      // Disable fields that admin shouldn't change when setting schedule
      orderProductNameDisplay.readOnly = true;
      orderQuantityInput.readOnly = true;
      orderPackingInput.disabled = true;
      orderNameInput.readOnly = true;
      orderAddressInput.readOnly = true;
      orderPhoneInput.readOnly = true;
    } else if (data) {
      // New order mode from product card
      orderModalTitle.textContent = "Formulir Pemesanan";
      orderProductIdInput.value = data.id;
      orderProductNameDisplay.value = data.name; // Display product name
      orderQuantityInput.value = 1; // Default quantity to 1 kg
      orderPackingInput.value = "plastik"; // Default packing
      orderDayInput.value = ""; // Clear delivery day
      orderTimeInput.value = ""; // Clear delivery time
      saveOrderBtn.textContent = "Pesan Sekarang";

      // Ensure fields are editable for new orders
      orderProductNameDisplay.readOnly = true; // This should always be readonly as it's a display field
      orderQuantityInput.readOnly = false;
      orderPackingInput.disabled = false;
      orderNameInput.readOnly = false;
      orderAddressInput.readOnly = false;
      orderPhoneInput.readOnly = false;
    }
    orderModal.classList.remove("hidden");
  }

  // Fungsi untuk menutup modal pemesanan (baru)
  function closeOrderModal() {
    orderModal.classList.add("hidden");
    // Reset readonly/disabled states when closing the modal
    orderProductNameDisplay.readOnly = true; // Always readonly
    orderQuantityInput.readOnly = false;
    orderPackingInput.disabled = false;
    orderNameInput.readOnly = false;
    orderAddressInput.readOnly = false;
    orderPhoneInput.readOnly = false;
  }

  // Event listener untuk tombol "Tambah Produk Baru"
  if (addProductBtn) {
    addProductBtn.addEventListener("click", () => {
      openProductModal();
    });
  }

  // Event listener untuk tombol tutup modal produk
  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeProductModal);
  }

  // Tutup modal produk jika klik di luar area konten modal
  window.addEventListener("click", (event) => {
    if (event.target === productModal) {
      closeProductModal();
    }
  });

  // Event delegation untuk tombol edit dan hapus pada kartu produk
  if (productsGrid) {
    productsGrid.addEventListener("click", (e) => {
      const target = e.target;
      const productId = target.dataset.id;

      // Only handle edit/delete if the target is one of these buttons AND user is admin
      if (isAdminLoggedIn()) {
        if (target.classList.contains("edit-btn")) {
          const productToEdit = fishProducts.find((p) => p.id === productId);
          if (productToEdit) {
            openProductModal(productToEdit);
          }
        } else if (target.classList.contains("delete-btn")) {
          // Replace confirm with custom message box or displayAppMessage
          if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
            // Using confirm for simplicity, replace with custom modal if needed
            fishProducts = fishProducts.filter((p) => p.id !== productId);
            saveProducts();
            renderProducts();
            displayAppMessage("Produk berhasil dihapus!", false);
          }
        }
      }
      // Product card click for non-admin is handled by the renderProducts function
    });
  }

  // Event listener untuk tombol "Tambah Kendaraan Baru"
  if (addVehicleBtn) {
    addVehicleBtn.addEventListener("click", () => {
      openFleetModal();
    });
  }

  // Event listener untuk tombol tutup modal armada
  if (closeFleetModalButton) {
    closeFleetModalButton.addEventListener("click", closeFleetModal);
  }

  // Tutup modal armada jika klik di luar area konten modal
  window.addEventListener("click", (event) => {
    if (event.target === fleetModal) {
      closeFleetModal();
    }
  });

  // Event delegation untuk tombol edit dan hapus pada tabel armada
  if (fleetTableBody) {
    fleetTableBody.addEventListener("click", (e) => {
      const target = e.target;
      const vehicleId = target.dataset.id;

      if (target.classList.contains("edit-btn")) {
        const vehicleToEdit = fleetData.find((v) => v.id === vehicleId);
        if (vehicleToEdit) {
          openFleetModal(vehicleToEdit);
        }
      } else if (target.classList.contains("delete-btn")) {
        // Replace confirm with custom message box or displayAppMessage
        if (confirm("Apakah Anda yakin ingin menghapus kendaraan ini?")) {
          // Using confirm for simplicity, replace with custom modal if needed
          fleetData = fleetData.filter((v) => v.id !== vehicleId);
          saveFleet();
          renderFleet();
          displayAppMessage("Kendaraan berhasil dihapus!", false);
        }
      }
    });
  }

  // Event listener untuk tombol "Tambah Jadwal Baru" (Dihapus)
  /*
  if (addScheduleBtn) {
    addScheduleBtn.addEventListener("click", () => {
      openScheduleModal();
    });
  }
  */

  // Event listener untuk tombol tutup modal jadwal (Dihapus)
  /*
  if (closeScheduleModalButton) {
    closeScheduleModalButton.addEventListener("click", closeScheduleModal);
  }
  */

  // Tutup modal jadwal jika klik di luar area konten modal (Dihapus)
  /*
  window.addEventListener("click", (event) => {
    if (event.target === scheduleModal) {
      closeScheduleModal();
    }
  });
  */

  // Event delegation untuk tombol edit dan hapus pada tabel jadwal (Dihapus)
  /*
  if (scheduleTableBody) {
    scheduleTableBody.addEventListener("click", (e) => {
      const target = e.target;
      const scheduleId = target.dataset.id;

      if (target.classList.contains("edit-btn")) {
        const scheduleToEdit = shippingSchedules.find(
          (s) => s.id === scheduleId
        );
        if (scheduleToEdit) {
          openScheduleModal(scheduleToEdit);
        }
      } else if (target.classList.contains("delete-btn")) {
        // Replace confirm with custom message box or displayAppMessage
        if (confirm("Apakah Anda yakin ingin menghapus jadwal ini?")) {
          // Using confirm for simplicity, replace with custom modal if needed
          shippingSchedules = shippingSchedules.filter(
            (s) => s.id !== scheduleId
          );
          saveSchedules();
          renderSchedules();
          displayAppMessage("Jadwal berhasil dihapus!", false);
        }
      }
    });
  }
  */

  // Event listener untuk tombol close modal pemesanan (baru)
  if (closeOrderModalButton) {
    closeOrderModalButton.addEventListener("click", closeOrderModal);
  }

  // Tutup modal pemesanan jika klik di luar area konten modal (baru)
  window.addEventListener("click", (event) => {
    if (event.target === orderModal) {
      closeOrderModal();
    }
  });

  // Fungsi untuk menangani submit form pemesanan (baru)
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const recordId = orderRecordIdInput.value; // Get the record ID if in edit mode
    const productId = orderProductIdInput.value;
    const productName = orderProductNameDisplay.value;
    const orderQuantity = parseFloat(orderQuantityInput.value); // New: Get quantity as float
    const orderPacking = orderPackingInput.value; // New: Get packing type
    const deliveryDay = orderDayInput.value.trim(); // New: Get delivery day
    const deliveryTime = orderTimeInput.value.trim(); // New: Get delivery time
    const customerName = orderNameInput.value.trim();
    const customerAddress = orderAddressInput.value.trim();
    const customerPhone = orderPhoneInput.value.trim();

    if (
      !customerName ||
      !customerAddress ||
      !customerPhone ||
      !orderQuantity ||
      !orderPacking ||
      !deliveryDay || // Validate new fields
      !deliveryTime // Validate new fields
    ) {
      showMessage(orderFormMessage, "Semua kolom harus diisi.", true);
      return;
    }

    if (isNaN(orderQuantity) || orderQuantity <= 0) {
      showMessage(orderFormMessage, "Jumlah ikan harus angka positif.", true);
      return;
    }

    if (recordId) {
      // Edit existing shipping record (could be general edit or scheduling edit)
      const recordIndex = shippingRecords.findIndex((r) => r.id === recordId);
      if (recordIndex !== -1) {
        const oldRecord = { ...shippingRecords[recordIndex] }; // Copy old record for comparison
        shippingRecords[recordIndex] = {
          ...oldRecord, // Keep existing properties
          customerName,
          customerAddress,
          customerPhone,
          productName,
          quantity: orderQuantity,
          packing: orderPacking,
          deliveryDay,
          deliveryTime,
          // If admin is setting schedule, mark it as scheduled and read by admin
          isScheduled: true, // Mark as scheduled
          readByAdmin: true, // Mark as read by admin
        };
        saveShippingRecords();
        renderShippingRecords(); // Re-render shipping records table

        // If the schedule was just set (i.e., it wasn't scheduled before)
        if (!oldRecord.isScheduled && isAdminLoggedIn()) {
          displayAppMessage(
            `Notifikasi jadwal pengiriman untuk pesanan ${productName} ke ${customerName} pada ${deliveryDay} pukul ${deliveryTime} telah dikirim ke pengguna.`,
            false
          );
        } else {
          displayAppMessage("Pesanan berhasil diupdate!", false);
        }
      }
    } else {
      // Add new shipping record
      const loggedInUserData = JSON.parse(
        sessionStorage.getItem(LOGGED_IN_USER_DATA_KEY)
      );
      const orderedByUsername = loggedInUserData
        ? loggedInUserData.username
        : "Guest"; // Store username of the person who ordered

      const newShippingRecord = {
        id: "ship" + Date.now(), // Simple unique ID
        customerName,
        customerAddress,
        customerPhone,
        productName, // Keep product name in record
        quantity: orderQuantity,
        packing: orderPacking,
        deliveryDay, // Add new field
        deliveryTime, // Add new field
        orderDate: new Date().toISOString().slice(0, 10), // Current date
        readByAdmin: false, // New: Mark as unread for admin
        isScheduled: false, // New: Not scheduled yet
        orderedBy: orderedByUsername, // New: Store who ordered this
      };

      shippingRecords.push(newShippingRecord);
      displayAppMessage(
        `Pesanan Anda untuk ${orderQuantity} kg ${productName} telah diterima! Kami akan segera menghubungi Anda. (Ini adalah demo, tidak ada pengiriman data ke server.)`,
        false
      );

      // Tampilkan notifikasi ke admin (pop-up)
      if (isAdminLoggedIn()) {
        const notificationContent = `
          <p><strong>Nama Pemesan:</strong> ${newShippingRecord.customerName}</p>
          <p><strong>Alamat:</strong> ${newShippingRecord.customerAddress}</p>
          <p><strong>Telepon:</strong> ${newShippingRecord.customerPhone}</p>
          <p><strong>Produk:</strong> ${newShippingRecord.productName}</p>
          <p><strong>Jumlah:</strong> ${newShippingRecord.quantity} kg</p>
          <p><strong>Packing:</strong> ${newShippingRecord.packing}</p>
          <p><strong>Hari Pengiriman:</strong> ${newShippingRecord.deliveryDay}</p>
          <p><strong>Jam Pengiriman:</strong> ${newShippingRecord.deliveryTime}</p>
          <p><strong>Tanggal Pesan:</strong> ${newShippingRecord.orderDate}</p>
        `;
        displayAdminNotification("Pesanan Baru Diterima!", notificationContent);
        renderAdminNotifications(); // Update admin notifications page immediately
      }
    }

    saveShippingRecords();
    renderShippingRecords();
    closeOrderModal();
  });

  // Event delegation for edit and delete buttons on shipping records table
  if (shippingTableBody) {
    shippingTableBody.addEventListener("click", (e) => {
      const target = e.target;
      const recordId = target.dataset.id;

      if (target.classList.contains("edit-btn")) {
        // Only allow admin to edit
        if (isAdminLoggedIn()) {
          const recordToEdit = shippingRecords.find((r) => r.id === recordId);
          if (recordToEdit) {
            openOrderModal(recordToEdit, true); // Open order modal in edit mode
          }
        } else {
          displayAppMessage(
            "Anda tidak memiliki izin untuk mengedit pesanan.",
            true
          );
        }
      } else if (target.classList.contains("delete-btn")) {
        // Find the record to be deleted
        const recordToDelete = shippingRecords.find((r) => r.id === recordId);

        if (confirm("Apakah Anda yakin ingin membatalkan pesanan ini?")) {
          // If the order was scheduled, send a notification to the admin
          if (recordToDelete && recordToDelete.isScheduled) {
            const notificationContent = `
              <p><strong>Pesanan Dibatalkan:</strong> ${
                recordToDelete.productName
              } (${recordToDelete.quantity} kg)</p>
              <p><strong>Oleh:</strong> ${recordToDelete.customerName}</p>
              <p><strong>Alamat:</strong> ${recordToDelete.customerAddress}</p>
              <p><strong>Telepon:</strong> ${recordToDelete.customerPhone}</p>
              <p><strong>Jadwal Pengiriman:</strong> ${
                recordToDelete.deliveryDay
              } pukul ${recordToDelete.deliveryTime}</p>
              <p class="notification-date">Dibatalkan pada: ${new Date()
                .toISOString()
                .slice(0, 10)}</p>
            `;
            displayAdminNotification(
              "Pesanan Dibatalkan!",
              notificationContent
            );
            renderAdminNotifications(); // Update admin notifications page
          }

          shippingRecords = shippingRecords.filter((r) => r.id !== recordId);
          saveShippingRecords();
          renderShippingRecords();
          displayAppMessage("Pesanan berhasil dibatalkan!", false);
        }
      } else if (target.classList.contains("set-schedule-btn")) {
        // New: Set Schedule button
        if (isAdminLoggedIn()) {
          const recordToSchedule = shippingRecords.find(
            (r) => r.id === recordId
          );
          if (recordToSchedule) {
            openOrderModal(recordToSchedule, false, true); // Open in scheduling edit mode
          }
        }
      }
    });
  }

  // Event listener untuk link "Daftar Sekarang"
  if (showRegisterFormLink) {
    showRegisterFormLink.addEventListener("click", (e) => {
      e.preventDefault();
      showRegisterPage();
    });
  }

  // Event listener untuk link "Login di sini"
  if (showLoginFormLink) {
    showLoginFormLink.addEventListener("click", (e) => {
      e.preventDefault();
      showLoginPage();
    });
  }

  // Event listener untuk pengiriman form login
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Cek admin default
    if (
      username === DEFAULT_ADMIN_USERNAME &&
      password === DEFAULT_ADMIN_PASSWORD
    ) {
      sessionStorage.setItem(LOGIN_KEY, "true");
      // Simpan data admin dummy ke sessionStorage
      sessionStorage.setItem(
        LOGGED_IN_USER_DATA_KEY,
        JSON.stringify({
          name: "Administrator",
          nik: "N/A",
          dob: "N/A",
          address: "N/A",
          phone: "N/A", // New
          email: "admin@aqualogistics.com", // New
          username: DEFAULT_ADMIN_USERNAME,
          photo: null,
        })
      );
      showMessage(loginMessage, "Login berhasil sebagai Admin!", false);
      setTimeout(() => {
        updateUI();
        loginMessage.textContent = "";
      }, 500);
      return;
    }

    // Cek user terdaftar
    const users = getRegisteredUsers();
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      sessionStorage.setItem(LOGIN_KEY, "true");
      sessionStorage.setItem(
        LOGGED_IN_USER_DATA_KEY,
        JSON.stringify(foundUser)
      ); // Simpan data user yang ditemukan
      showMessage(loginMessage, "Login berhasil!", false);
      setTimeout(() => {
        updateUI();
        loginMessage.textContent = "";
      }, 500);
    } else {
      showMessage(loginMessage, "Username atau password salah.", true);
      usernameInput.value = "";
      passwordInput.value = "";
    }
  });

  // Event listener untuk pengiriman form register
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = regNameInput.value.trim();
    const nik = regNikInput.value.trim();
    const dob = regDobInput.value;
    const address = regAddressInput.value.trim();
    const username = regUsernameInput.value.trim();
    const password = regPasswordInput.value.trim();

    // New fields
    const phone = ""; // Default empty, user can edit later
    const email = ""; // Default empty, user can edit later

    if (!name || !nik || !dob || !address || !username || !password) {
      showMessage(registerMessage, "Semua kolom harus diisi.", true);
      return;
    }

    if (username.length < 3) {
      showMessage(registerMessage, "Username minimal 3 karakter.", true);
      return;
    }
    if (password.length < 3) {
      showMessage(registerMessage, "Password minimal 3 karakter.", true);
      return;
    }

    let users = getRegisteredUsers();

    if (users.some((user) => user.username === username)) {
      showMessage(
        registerMessage,
        "Username sudah terdaftar. Gunakan username lain.",
        true
      );
      return;
    }

    // Simpan user baru tanpa foto (photo: null)
    const newUser = {
      name,
      nik,
      dob,
      address,
      phone, // New
      email, // New
      photo: null,
      username,
      password,
    };
    users.push(newUser);
    saveRegisteredUsers(users);
    showMessage(registerMessage, "Pendaftaran berhasil! Silakan login.", false);
    registerForm.reset();
    setTimeout(() => {
      showLoginPage();
    }, 1000);
  });

  // Event listener untuk tombol logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.removeItem(LOGIN_KEY); // Hapus status login
      sessionStorage.removeItem(LOGGED_IN_USER_DATA_KEY); // Hapus data user yang login
      displayAppMessage("Anda telah berhasil logout.", false);
      updateUI(); // Perbarui UI
    });
  }

  // Event listener untuk link "Profil" di navigasi
  if (profileLink) {
    profileLink.addEventListener("click", (e) => {
      e.preventDefault();
      showProfileContent(); // Tampilkan halaman profil
    });
  }

  // Event listener untuk tombol "Edit Profil"
  if (editProfileBtn) {
    editProfileBtn.addEventListener("click", () => {
      toggleProfileEditMode(true); // Aktifkan mode edit
    });
  }

  // Event listener untuk tombol "Batal" di form edit profil
  if (cancelEditProfileBtn) {
    cancelEditProfileBtn.addEventListener("click", () => {
      toggleProfileEditMode(false); // Nonaktifkan mode edit
    });
  }

  // Event listener untuk pengiriman form edit profil
  if (profileEditForm) {
    profileEditForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = editNameInput.value.trim();
      const nik = editNikInput.value.trim();
      const dob = editDobInput.value;
      const address = editAddressInput.value.trim();
      const phone = editPhoneInput.value.trim(); // New
      const email = editEmailInput.value.trim(); // New
      const currentPassword = currentPasswordInput.value;
      const newPassword = newPasswordInput.value;
      const confirmNewPassword = confirmNewPasswordInput.value;

      // Ambil data user yang sedang login dari sessionStorage
      let loggedInUserData = JSON.parse(
        sessionStorage.getItem(LOGGED_IN_USER_DATA_KEY)
      );

      // Validasi input
      if (!name || !nik || !dob || !address) {
        showMessage(
          profileFormMessage,
          "Nama, NIK, Tanggal Lahir, dan Alamat harus diisi.",
          true
        );
        return;
      }

      if (newPassword && newPassword !== confirmNewPassword) {
        showMessage(
          profileFormMessage,
          "Password baru dan konfirmasi password tidak cocok.",
          true
        );
        return;
      }

      // Jika user mencoba mengganti password, validasi password lama
      if (newPassword && loggedInUserData.password !== currentPassword) {
        showMessage(profileFormMessage, "Password lama salah.", true);
        return;
      }

      // Update data user yang sedang login
      loggedInUserData.name = name;
      loggedInUserData.nik = nik;
      loggedInUserData.dob = dob;
      loggedInUserData.address = address;
      loggedInUserData.phone = phone; // New
      loggedInUserData.email = email; // New
      if (newPassword) {
        loggedInUserData.password = newPassword;
      }

      // Perbarui data di sessionStorage
      sessionStorage.setItem(
        LOGGED_IN_USER_DATA_KEY,
        JSON.stringify(loggedInUserData)
      );

      // Perbarui data di localStorage (untuk user terdaftar)
      let registeredUsers = getRegisteredUsers();
      const userIndex = registeredUsers.findIndex(
        (user) => user.username === loggedInUserData.username
      );

      if (userIndex !== -1) {
        registeredUsers[userIndex] = loggedInUserData;
        saveRegisteredUsers(registeredUsers);
      } else if (loggedInUserData.username === DEFAULT_ADMIN_USERNAME) {
        // Jika admin, tidak perlu update registeredUsers karena admin adalah default
        // Data admin hanya disimpan di sessionStorage
      }

      showMessage(profileFormMessage, "Profil berhasil diperbarui!", false);
      displayAppMessage("Profil berhasil diperbarui!", false);
      setTimeout(() => {
        toggleProfileEditMode(false); // Kembali ke mode tampilan setelah save
      }, 1000);
    });
  }

  // Event listener untuk link "Produk Kami" di navigasi
  if (productsLink) {
    productsLink.addEventListener("click", (e) => {
      e.preventDefault();
      showProductsContent(); // Tampilkan halaman produk
    });
  }

  // Event listener untuk link "Armada Pengangkutan" di navigasi
  if (fleetLink) {
    fleetLink.addEventListener("click", (e) => {
      e.preventDefault();
      showFleetContent(); // Tampilkan halaman armada
    });
  }

  // Event listener untuk link "Jadwal Angkut" di navigasi (Dihapus)
  /*
  if (scheduleLink) {
    scheduleLink.addEventListener("click", (e) => {
      e.preventDefault();
      showScheduleContent(); // Tampilkan halaman jadwal
    });
  }
  */

  // Event listener untuk tombol "Mulai Pengiriman Sekarang" di Hero Section (baru)
  if (startShippingBtn) {
    startShippingBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showShippingContent(); // Arahkan ke halaman pengiriman
    });
  }

  // Event listener untuk tombol "Kembali ke Beranda" di halaman profil dan produk
  if (backToMainBtn) {
    backToMainBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showMainContent(); // Kembali ke halaman utama
    });
  }

  // Event listener untuk tombol "Kembali ke Beranda" di halaman pengiriman (baru)
  if (backToMainFromShippingBtn) {
    backToMainFromShippingBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showMainContent(); // Kembali ke halaman utama
    });
  }

  // Event listener untuk link "Notifikasi Admin" (baru)
  if (adminNotificationsLink) {
    adminNotificationsLink.addEventListener("click", (e) => {
      e.preventDefault();
      showAdminNotificationsPage(); // Tampilkan halaman notifikasi admin
    });
  }
  if (adminNotificationsLinkMobile) {
    adminNotificationsLinkMobile.addEventListener("click", (e) => {
      e.preventDefault();
      showAdminNotificationsPage(); // Tampilkan halaman notifikasi admin
    });
  }

  // Event listener untuk tombol "Kembali ke Beranda" di halaman notifikasi admin (baru)
  if (backToMainFromAdminNotificationsBtn) {
    backToMainFromAdminNotificationsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showMainContent(); // Kembali ke halaman utama
    });
  }

  // Smooth scrolling untuk navigasi (di dalam konten utama)
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Pastikan ini bukan tombol logout, profil, produk, armada, jadwal, atau mulai pengiriman
      if (
        this.id === "logout-btn" ||
        this.id === "profile-link" ||
        this.id === "products-link" ||
        this.id === "fleet-link" ||
        // this.id === "schedule-link" || // Dihapus
        this.id === "start-shipping-btn" || // Exclude the new button
        this.id === "admin-notifications-link" || // Exclude new admin notifications link
        this.id === "admin-notifications-link-mobile" // Exclude new admin notifications mobile link
      )
        return;

      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Sembunyikan halaman profil, produk, armada, jadwal, dan pengiriman jika sedang ditampilkan
        profilePage.classList.add("hidden");
        productsSection.classList.add("hidden");
        fleetSection.classList.add("hidden");
        // scheduleSection.classList.add("hidden"); // Dihapus
        shippingPage.classList.add("hidden"); // Sembunyikan halaman pengiriman
        adminNotificationsPage.classList.add("hidden"); // Sembunyikan halaman notifikasi admin
        // Tampilkan kembali bagian-bagian utama website
        document.getElementById("layanan").style.display = "block";
        document.getElementById("kontak").style.display = "block";
        heroSection.style.display = "block";

        window.scrollTo({
          top: targetElement.offsetTop - 80, // Sesuaikan offset jika ada fixed header
          behavior: "smooth", // Efek scroll yang halus
        });
      }
    });
  });

  // Menampilkan tahun saat ini di footer
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Contoh sederhana untuk form kontak (tanpa backend)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      displayAppMessage(
        "Pesan Anda telah terkirim! (Ini adalah demo, tidak ada pengiriman data ke server.)",
        false
      );
      contactForm.reset();
    });
  }

  // Panggil fungsi untuk memuat produk, armada, jadwal, dan catatan pengiriman saat DOM selesai dimuat
  loadProducts();
  loadFleet();
  // loadSchedules(); // Dihapus
  loadShippingRecords(); // Load shipping records
  // Panggil updateUI saat DOM selesai dimuat untuk memeriksa status login awal
  updateUI();
});
