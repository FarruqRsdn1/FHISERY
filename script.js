document.addEventListener("DOMContentLoaded", () => {
  // Referensi elemen-elemen UI
  const loginPage = document.getElementById("login-page");
  const registerPage = document.getElementById("register-page");
  // const mainAppWrapper = document.getElementById('main-app-wrapper'); // REMOVED: Wrapper untuk sidebar dan konten utama
  const mainAppContent = document.getElementById("main-app-content"); // Konten utama
  const profilePage = document.getElementById("profile-page");
  const heroSection = document.getElementById("hero-section");
  const productsSection = document.getElementById("produk");
  const productsGrid = document.getElementById("products-grid");
  const fleetSection = document.getElementById("fleet");
  const fleetTableBody = document.getElementById("fleet-table-body");
  const scheduleSection = document.getElementById("schedule");
  const scheduleTableBody = document.getElementById("schedule-table-body");

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

  // Elemen-elemen halaman profil
  const profileName = document.getElementById("profile-name");
  const profileNIK = document.getElementById("profile-nik");
  const profileDOB = document.getElementById("profile-dob");
  const profileAddress = document.getElementById("profile-address");
  const profileUsernameProfile = document.getElementById(
    "profile-username-profile"
  );
  const backToMainBtn = document.getElementById("back-to-main-btn");

  // Tombol logout di header
  const logoutBtn = document.getElementById("logout-btn");
  const profileLink = document.getElementById("profile-link");
  const productsLink = document.getElementById("products-link");
  const fleetLink = document.getElementById("fleet-link");
  const scheduleLink = document.getElementById("schedule-link");
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

  // Elemen Modal Jadwal
  const scheduleModal = document.getElementById("schedule-modal");
  const closeScheduleModalButton = scheduleModal.querySelector(
    ".close-button-schedule"
  );
  const scheduleForm = document.getElementById("schedule-form");
  const scheduleModalTitle = document.getElementById("schedule-modal-title");
  const scheduleIdInput = document.getElementById("schedule-id");
  const scheduleAddressInput = document.getElementById("schedule-address");
  const scheduleDateInput = document.getElementById("schedule-date");
  const scheduleTimeInput = document.getElementById("schedule-time");
  const scheduleNotesInput = document.getElementById("schedule-notes");
  const saveScheduleBtn = document.getElementById("save-schedule-btn");
  const scheduleFormMessage = document.getElementById("schedule-form-message");
  const addScheduleBtn = document.getElementById("add-schedule-btn");
  const adminOnlyScheduleHeader = document.querySelector(
    ".admin-only-header-schedule"
  );

  // Kredensial login default (untuk admin)
  const DEFAULT_ADMIN_USERNAME = "admin";
  const DEFAULT_ADMIN_PASSWORD = "123";
  const LOGIN_KEY = "isLoggedIn";
  const LOGGED_IN_USER_DATA_KEY = "loggedInUserData";
  const REGISTERED_USERS_KEY = "registeredUsers";
  const PRODUCTS_KEY = "fishProducts";
  const FLEET_KEY = "fleetData";
  const SCHEDULES_KEY = "shippingSchedules";

  // Data produk (akan dimuat dari localStorage)
  let fishProducts = [];

  // Data armada (akan dimuat dari localStorage)
  let fleetData = [];

  // Data jadwal (akan dimuat dari localStorage)
  let shippingSchedules = [];

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
        },
        {
          id: "p2",
          name: "Ikan Lele",
          size: "150-250 gr/ekor",
          price: "Rp 20.000/kg",
          photo: "https://placehold.co/300x200/ADD8E6/000000?text=Ikan+Lele",
        },
        {
          id: "p3",
          name: "Ikan Gurame",
          size: "400-600 gr/ekor",
          price: "Rp 45.000/kg",
          photo: "https://placehold.co/300x200/ADD8E6/000000?text=Ikan+Gurame",
        },
        {
          id: "p4",
          name: "Ikan Mas",
          size: "250-350 gr/ekor",
          price: "Rp 30.000/kg",
          photo: "https://placehold.co/300x200/ADD8E6/000000?text=Ikan+Mas",
        },
        {
          id: "p5",
          name: "Ikan Patin",
          size: "300-400 gr/ekor",
          price: "Rp 28.000/kg",
          photo: "https://placehold.co/300x200/ADD8E6/000000?text=Ikan+Patin",
        },
        {
          id: "p6",
          name: "Udang Vannamei",
          size: "Size 40/50",
          price: "Rp 70.000/kg",
          photo:
            "https://placehold.co/300x200/ADD8E6/000000?text=Udang+Vannamei",
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

  // Fungsi untuk memuat jadwal dari localStorage
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

  // Fungsi untuk menyimpan jadwal ke localStorage
  function saveSchedules() {
    localStorage.setItem(SCHEDULES_KEY, JSON.stringify(shippingSchedules));
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

  // Fungsi untuk menampilkan halaman utama aplikasi (selain profil, produk, armada, dan jadwal)
  function showMainContent() {
    // Sembunyikan semua section yang mungkin aktif
    profilePage.classList.add("hidden");
    productsSection.classList.add("hidden");
    fleetSection.classList.add("hidden");
    scheduleSection.classList.add("hidden");

    // Tampilkan bagian-bagian utama website
    heroSection.style.display = "block";
    document.getElementById("layanan").style.display = "block";
    document.getElementById("tentang").style.display = "block";
    document.getElementById("kontak").style.display = "block";
  }

  // Fungsi untuk menampilkan halaman profil
  function showProfileContent() {
    // Sembunyikan semua section yang mungkin aktif
    productsSection.classList.add("hidden");
    fleetSection.classList.add("hidden");
    scheduleSection.classList.add("hidden");
    heroSection.style.display = "none";
    document.getElementById("layanan").style.display = "none";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("kontak").style.display = "none";

    profilePage.classList.remove("hidden");
    displayUserProfile();
  }

  // Fungsi untuk menampilkan halaman produk
  function showProductsContent() {
    // Sembunyikan semua section yang mungkin aktif
    profilePage.classList.add("hidden");
    fleetSection.classList.add("hidden");
    scheduleSection.classList.add("hidden");
    heroSection.style.display = "none";
    document.getElementById("layanan").style.display = "none";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("kontak").style.display = "none";

    productsSection.classList.remove("hidden");
    renderProducts(); // Render produk
  }

  // Fungsi untuk menampilkan halaman armada
  function showFleetContent() {
    // Sembunyikan semua section yang mungkin aktif
    profilePage.classList.add("hidden");
    productsSection.classList.add("hidden");
    scheduleSection.classList.add("hidden");
    heroSection.style.display = "none";
    document.getElementById("layanan").style.display = "none";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("kontak").style.display = "none";

    fleetSection.classList.remove("hidden");
    renderFleet(); // Render armada
  }

  // Fungsi untuk menampilkan halaman jadwal
  function showScheduleContent() {
    // Sembunyikan semua section yang mungkin aktif
    profilePage.classList.add("hidden");
    productsSection.classList.add("hidden");
    fleetSection.classList.add("hidden");
    heroSection.style.display = "none";
    document.getElementById("layanan").style.display = "none";
    document.getElementById("tentang").style.display = "none";
    document.getElementById("kontak").style.display = "none";

    scheduleSection.classList.remove("hidden"); // Tampilkan halaman jadwal
    renderSchedules(); // Render jadwal
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

      // Tampilkan/sembunyikan tombol tambah jadwal untuk admin
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
      showMainContent(); // Pastikan konten utama ditampilkan setelah login
    } else {
      loginPage.classList.remove("hidden");
      registerPage.classList.add("hidden");
      mainAppContent.classList.add("hidden"); // Sembunyikan konten utama
      profilePage.classList.add("hidden");
      productsSection.classList.add("hidden");
      fleetSection.classList.add("hidden");
      scheduleSection.classList.add("hidden");
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

      // Sembunyikan tombol tambah jadwal jika tidak login
      if (addScheduleBtn) {
        addScheduleBtn.classList.add("hidden");
        if (adminOnlyScheduleHeader)
          adminOnlyScheduleHeader.classList.add("hidden");
      }
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
    scheduleSection.classList.add("hidden");
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
    scheduleSection.classList.add("hidden");
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
      profileUsernameProfile.textContent = userData.username || "-";
    } else {
      profileName.textContent = "Tidak tersedia";
      profileNIK.textContent = "Tidak tersedia";
      profileDOB.textContent = "Tidak tersedia";
      profileAddress.textContent = "Tidak tersedia";
      profileUsernameProfile.textContent = "Tidak tersedia";
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

  // Fungsi untuk merender data jadwal
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
        fishProducts[productIndex] = { id, name, size, price, photo };
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

  // Fungsi untuk membuka modal jadwal (tambah/edit)
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
      scheduleModalTitle.textContent = "Tambah Jadwal Baru";
    }
    scheduleModal.classList.remove("hidden");
  }

  // Fungsi untuk menutup modal jadwal
  function closeScheduleModal() {
    scheduleModal.classList.add("hidden");
  }

  // Fungsi untuk menambah atau mengedit jadwal
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

      if (target.classList.contains("edit-btn")) {
        const productToEdit = fishProducts.find((p) => p.id === productId);
        if (productToEdit) {
          openProductModal(productToEdit);
        }
      } else if (target.classList.contains("delete-btn")) {
        if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
          fishProducts = fishProducts.filter((p) => p.id !== productId);
          saveProducts();
          renderProducts();
          displayAppMessage("Produk berhasil dihapus!", false);
        }
      }
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
        if (confirm("Apakah Anda yakin ingin menghapus kendaraan ini?")) {
          fleetData = fleetData.filter((v) => v.id !== vehicleId);
          saveFleet();
          renderFleet();
          displayAppMessage("Kendaraan berhasil dihapus!", false);
        }
      }
    });
  }

  // Event listener untuk tombol "Tambah Jadwal Baru"
  if (addScheduleBtn) {
    addScheduleBtn.addEventListener("click", () => {
      openScheduleModal();
    });
  }

  // Event listener untuk tombol tutup modal jadwal
  if (closeScheduleModalButton) {
    closeScheduleModalButton.addEventListener("click", closeScheduleModal);
  }

  // Tutup modal jadwal jika klik di luar area konten modal
  window.addEventListener("click", (event) => {
    if (event.target === scheduleModal) {
      closeScheduleModal();
    }
  });

  // Event delegation untuk tombol edit dan hapus pada tabel jadwal
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
        if (confirm("Apakah Anda yakin ingin menghapus jadwal ini?")) {
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

  // Event listener untuk link "Jadwal Angkut" di navigasi
  if (scheduleLink) {
    scheduleLink.addEventListener("click", (e) => {
      e.preventDefault();
      showScheduleContent(); // Tampilkan halaman jadwal
    });
  }

  // Event listener untuk tombol "Kembali ke Beranda" di halaman profil dan produk
  if (backToMainBtn) {
    backToMainBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showMainContent(); // Kembali ke halaman utama
    });
  }

  // Smooth scrolling untuk navigasi (di dalam konten utama)
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Pastikan ini bukan tombol logout, profil, produk, armada, atau jadwal
      if (
        this.id === "logout-btn" ||
        this.id === "profile-link" ||
        this.id === "products-link" ||
        this.id === "fleet-link" ||
        this.id === "schedule-link"
      )
        return;

      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Sembunyikan halaman profil, produk, armada, dan jadwal jika sedang ditampilkan
        profilePage.classList.add("hidden");
        productsSection.classList.add("hidden");
        fleetSection.classList.add("hidden");
        scheduleSection.classList.add("hidden");
        // Tampilkan kembali bagian-bagian utama website
        document.getElementById("layanan").style.display = "block";
        document.getElementById("tentang").style.display = "block";
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

  // Panggil fungsi untuk memuat produk, armada, dan jadwal saat DOM selesai dimuat
  loadProducts();
  loadFleet();
  loadSchedules();
  // Panggil updateUI saat DOM selesai dimuat untuk memeriksa status login awal
  updateUI();
});
