<!DOCTYPE html>
<html lang="en">
<%- include('partials/header') %>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<body>
  <%- include('partials/navbar') %>

  <section class="py-5 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <h1 class="text-center mb-3 display-5 fw-bold text-primary">Your Gift Grants Wishes</h1>
          <p class="text-center lead mb-5">Choose how you'd like to donate — every dollar helps a child</p>

          <!-- TABS -->
          <ul class="nav nav-pills nav-fill mb-5 shadow-sm rounded" id="paymentTabs">
            <li class="nav-item">
              <button class="nav-link active fs-5 py-3" data-bs-toggle="pill" data-bs-target="#crypto">Crypto (BTC / USDT)</button>
            </li>
            <li class="nav-item">
              <button class="nav-link fs-5 py-3" data-bs-toggle="pill" data-bs-target="#giftcard">Gift Cards</button>
            </li>
          </ul>

          <div class="tab-content bg-white p-5 rounded shadow">

            <!-- CRYPTO TAB -->
            <div class="tab-pane fade show active" id="crypto">
              <div class="text-center">
                <h3 class="mb-4">Donate with Cryptocurrency</h3>
                <p class="text-success lead mb-4">100% goes to granting wishes • Instant & Secure</p>

                <!-- BTC -->
                <div class="p-4 border rounded mb-4 bg-light">
                  <h5>Bitcoin (BTC)</h5>
                  <code class="bg-white p-3 d-block selectable">bc1qyourbitcoinaddresshere1234567890</code>
                  <img src="/img/qr-btc.png" class="img-fluid mt-3" style="max-height:220px;" alt="BTC QR">
                </div>

                <!-- USDT TRC20 -->
                <div class="p-4 border rounded bg-light">
                  <h5>USDT (TRC20 - Lowest fees)</h5>
                  <code class="bg-white p-3 d-block selectable">Tyourusdttrc20addresshere1234567890</code>
                  <img src="/img/qr-usdt.png" class="img-fluid mt-3" style="max-height:220px;" alt="USDT QR">
                </div>

                <button onclick="copyAddress()" class="btn btn-success btn-lg mt-4 px-5 shadow">
                  <i class="bi bi-clipboard"></i> Copy Address
                </button>
              </div>
            </div>

            <!-- GIFT CARD TAB -->
            <div class="tab-pane fade" id="giftcard">
              <div class="text-center py-5">
                <h2 class="text-success mb-4">Donate with Unused Gift Cards</h2>
                <p class="lead mb-4">Turn your unused gift cards into life-changing wishes!</p>

                <h5 class="text-primary mb-4">We accept:</h5>
                <h4 class="mb-5">
                  Amazon • Visa • Mastercard • Walmart • Target • Starbucks<br>
                  iTunes • Google Play • Steam • Roblox • PlayStation • Xbox
                </h4>

                <div class="bg-light p-5 rounded shadow mx-auto" style="max-width:600px;">
                  <h4 class="mb-3">Email the details to:</h4>
                  <h3 class="text-success mb-4">giftcards@wishstar.org</h3>
                  <p class="text-muted">Include: Brand • Amount • Card Number • PIN</p>
                  <p class="text-success mt-3"><strong>We’ll confirm within 24 hours!</strong></p>
                </div>

                <!-- Optional QR code -->
                <img src="/img/qr-giftcard.png" class="img-fluid mt-4" style="max-height:200px;" alt="Scan to email">
                <p class="text-muted"><small>Scan with phone to email instantly</small></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <script>
    function copyAddress() {
      const codes = document.querySelectorAll('code.selectable');
      const text = codes[0].textContent + "\n" + codes[1].textContent;
      navigator.clipboard.writeText(text);
      alert("Both addresses copied!\nBTC: " + codes[0].textContent + "\nUSDT: " + codes[1].textContent);
    }

    // Make text selectable
    document.querySelectorAll('code').forEach(el => {
      el.style.cursor = "pointer";
      el.onclick = () => {
        navigator.clipboard.writeText(el.textContent);
        alert("Copied: " + el.textContent);
      };
    });
  </script>

  <style>
    code.selectable { user-select: all; font-size: 1.1rem; }
  </style>

  <%- include('partials/footer') %>
</body>
</html>