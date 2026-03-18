// ===== SHARED COMPONENTS =====

const NAV_HTML = `
<nav class="navbar">
  <a href="index.html" class="nav-logo">Palm<span>Shine</span></a>
  <div class="nav-menu">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Services</a>
    <a href="clean-club.html">Clean Club</a>
    <a href="pricing.html">Pricing</a>
    <a href="booking.html">Book Now</a>
    <a href="contact.html">Contact</a>
  </div>
  <div class="nav-actions">
    <button class="nav-login-btn" onclick="window.location.href='login.html'">Log In</button>
    <button class="nav-book-btn" onclick="window.location.href='booking.html'">Book Now</button>
    <button class="nav-hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="clean-club.html">Clean Club</a>
  <a href="pricing.html">Pricing</a>
  <a href="booking.html">Book Now</a>
  <a href="contact.html">Contact</a>
  <div class="mobile-divider"></div>
  <a href="login.html">Employee Login</a>
  <a href="login.html?type=customer">Customer Login</a>
</div>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="nav-logo">Palm<span>Shine</span></div>
      <p>Professional residential cleaning serving St. Lucie &amp; Martin County, Florida.</p>
      <p class="tagline">"Trusted by Homes, Loved by Families"</p>
      <div style="margin-top:1.25rem;">
        <p class="footer-contact-item"><strong>Phone:</strong> (772) 877-5787</p>
        <p class="footer-contact-item"><strong>Email:</strong> management@palmshine.com</p>
        <p class="footer-contact-item"><strong>Service Area:</strong> St. Lucie &amp; Martin County, FL</p>
      </div>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <a href="services.html">Standard Clean</a>
      <a href="services.html">Deep Clean</a>
      <a href="services.html">Move-In/Out</a>
      <a href="clean-club.html">Clean Club</a>
      <a href="booking.html">Book Now</a>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <a href="about.html">About Us</a>
      <a href="pricing.html">Pricing</a>
      <a href="contact.html">Contact</a>
      <a href="login.html">Employee Login</a>
      <a href="login.html?type=customer">Customer Login</a>
    </div>
    <div class="footer-col">
      <h4>Legal</h4>
      <a href="refund-policy.html">Refund Policy</a>
      <a href="terms.html">Terms &amp; Conditions</a>
      <a href="accessibility.html">Accessibility</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 PalmShine LLC · All Rights Reserved</span>
    <span>palmshine.com · Port St. Lucie, FL</span>
  </div>
</footer>`;

function initSharedComponents() {
  const navEl = document.getElementById('navbar-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.innerHTML = NAV_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Set active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Mobile menu toggle
  document.addEventListener('click', (e) => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');
    if (!hamburger || !menu) return;
    if (hamburger.contains(e.target)) {
      menu.classList.toggle('open');
    } else if (!menu.contains(e.target)) {
      menu.classList.remove('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', initSharedComponents);

// Tab functionality
function initTabs(containerSelector) {
  const containers = document.querySelectorAll(containerSelector || '[data-tabs]');
  containers.forEach(container => {
    const btns = container.querySelectorAll('.tab-btn');
    const panels = container.querySelectorAll('.tab-panel');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.tab;
        const panel = container.querySelector(`[data-panel="${target}"]`);
        if (panel) panel.classList.add('active');
      });
    });
  });
}
document.addEventListener('DOMContentLoaded', () => initTabs());
