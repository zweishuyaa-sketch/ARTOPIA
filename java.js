/* =========================
   ARTOPIA JAVASCRIPT
========================= */

/* LOADER */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 1500);

});

/* =========================
   COUNTER
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;

        const current = +counter.innerText;

        const increment = target / 80;

        if (current < target) {

            counter.innerText = Math.ceil(
                current + increment
            );

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

/* =========================
   BACK TO TOP
========================= */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* =========================
   DARK MODE
========================= */

const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (
        document.body.classList.contains("dark")
    ) {

        darkBtn.textContent = "☀️";

    } else {

        darkBtn.textContent = "🌙";

    }

});

/* =========================
   SCROLL REVEAL
========================= */

const reveals =
document.querySelectorAll(
    ".reveal"
);

function revealOnScroll() {

    reveals.forEach(item => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (
            revealTop <
            windowHeight - revealPoint
        ) {

            item.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* =========================
   GALLERY MODAL
========================= */

const galleryCards =
document.querySelectorAll(
    ".gallery-card"
);

const modal =
document.querySelector(".modal");

const modalTitle =
document.querySelector(
    ".modal-content h2"
);

const modalText =
document.querySelector(
    ".modal-content p"
);

const closeModal =
document.querySelector(
    ".close-modal"
);

galleryCards.forEach(card => {

    card.addEventListener("click", () => {

        const title =
        card.querySelector("h3").innerText;

        modal.style.display = "flex";

        modalTitle.innerText = title;

        const descriptions = {

            "Seni Lukis":
            "Seni lukis adalah cabang seni rupa yang menggunakan warna, garis, bentuk, dan komposisi untuk menghasilkan karya visual yang menarik.",

            "Seni Tari":
            "Seni tari menggunakan gerakan tubuh yang teratur dan indah untuk menyampaikan pesan, cerita, atau emosi.",

            "Seni Musik":
            "Seni musik merupakan seni yang menggunakan bunyi, melodi, ritme, dan harmoni untuk menciptakan keindahan.",

            "Seni Teater":
            "Seni teater menggabungkan akting, dialog, musik, dan panggung dalam sebuah pertunjukan.",

            "Seni Patung":
            "Seni patung menghasilkan karya tiga dimensi yang dapat dinikmati dari berbagai sisi.",

            "Fotografi":
            "Fotografi adalah seni menangkap momen menggunakan kamera dan mengubahnya menjadi karya visual.",

            "Seni Digital":
            "Seni digital memanfaatkan teknologi dan perangkat lunak untuk menciptakan karya seni modern.",

            "Seni Kriya":
            "Seni kriya adalah seni kerajinan tangan yang mengutamakan keterampilan dan nilai estetika.",

            "Kaligrafi":
            "Kaligrafi adalah seni memperindah tulisan sehingga memiliki nilai visual yang tinggi.",

            "Arsitektur":
            "Arsitektur adalah seni merancang bangunan yang memperhatikan fungsi dan keindahan.",

            "Seni Film":
            "Film merupakan perpaduan seni visual, suara, dan cerita yang dikemas dalam media audiovisual.",

            "Desain Grafis":
            "Desain grafis menggunakan elemen visual untuk menyampaikan informasi dan pesan secara efektif."

        };

        modalText.innerText =
        descriptions[title] ||
        "Informasi belum tersedia.";

    });

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", e => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

/* =========================
   SEARCH
========================= */

const searchInput =
document.querySelector(
    ".search-box input"
);

const searchButton =
document.querySelector(
    ".search-box button"
);

searchButton.addEventListener(
    "click",
    searchGallery
);

searchInput.addEventListener(
    "keyup",
    e => {

        if (e.key === "Enter") {

            searchGallery();

        }

    }
);

function searchGallery() {

    const value =
    searchInput.value.toLowerCase();

    galleryCards.forEach(card => {

        const text =
        card.innerText.toLowerCase();

        if (
            text.includes(value)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}

/* =========================
   HAMBURGER
========================= */

const hamburger =
document.querySelector(
    ".hamburger"
);

const navLinks =
document.querySelector(
    ".nav-links"
);

hamburger.addEventListener(
    "click",
    () => {

        if (
            navLinks.style.display === "flex"
        ) {

            navLinks.style.display = "none";

        } else {

            navLinks.style.display = "flex";

            navLinks.style.flexDirection =
            "column";

            navLinks.style.position =
            "absolute";

            navLinks.style.top = "80px";

            navLinks.style.right = "20px";

            navLinks.style.background =
            "white";

            navLinks.style.padding =
            "20px";

            navLinks.style.borderRadius =
            "20px";

            navLinks.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.1)";

        }

    }
);

/* =========================
   PARALLAX BLOB
========================= */

window.addEventListener(
    "mousemove",
    e => {

        const blob1 =
        document.querySelector(
            ".blob1"
        );

        const blob2 =
        document.querySelector(
            ".blob2"
        );

        if (!blob1 || !blob2) return;

        blob1.style.transform =
        `translate(${e.clientX * 0.01}px, ${e.clientY * 0.01}px)`;

        blob2.style.transform =
        `translate(${e.clientX * -0.01}px, ${e.clientY * -0.01}px)`;

    }
);

/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(
    ".nav-links a"
);

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
            section.offsetTop - 150;

            if (
                pageYOffset >= sectionTop
            ) {

                current =
                section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);

console.log(
    "🎨 ARTOPIA Loaded Successfully"
);