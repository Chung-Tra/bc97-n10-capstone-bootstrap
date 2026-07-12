/* =============================================
   [BC_97-N10] Capstone Bootstrap — JS tự viết
   Dropdown, hamburger, accordion, tabs, carousel, modal:
   Bootstrap lo sẵn hết — KHÔNG cần viết JS cho mấy phần đó.
   File này hiện chỉ có bộ đếm số liệu cho phần About.
   ============================================= */

/* Bộ đếm số liệu — cách dùng trong HTML:
   <span class="counter" data-target="10458">0</span>
   Số sẽ tự chạy từ 0 lên 10458 khi mở trang. */

document.querySelectorAll(".counter").forEach(function (item) {
  var target = +item.dataset.target;   // số đích, ví dụ 10458
  var current = 0;
  var step = Math.ceil(target / 100);  // chia thành ~100 bước cho mượt

  var timer = setInterval(function () {
    current = current + step;
    if (current >= target) {
      current = target;
      clearInterval(timer);            // chạy tới đích thì dừng
    }
    item.textContent = current;
  }, 15);                              // 15ms mỗi bước ~ 1.5 giây chạy xong
});
