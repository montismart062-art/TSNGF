// بيانات العملاء الأفراد (مستخرجة من الصورة المرفقة image_1f51da.jpg)
const individualsData = [
    { id: 1, name: "احمد سيد عبد العاطي", nationalId: "28208292200612", phone: "01153143828" },
    { id: 2, name: "ربيع محمد سيد محمد", nationalId: "28910092200533", phone: "01118653750" },
    { id: 3, name: "عماد محمد الصغير أحمد", nationalId: "28406162200714", phone: "01142643188" },
    { id: 4, name: "عبد الكريم حسن سليمان معمر", nationalId: "25810182200979", phone: "01119325642" },
    { id: 5, name: "عيد عبد العظيم ابراهيم", nationalId: "26602102200517", phone: "01115999611" }
    // يمكن إضافة باقي الـ 20 اسم من الصورة بنفس النمط
];

// بيانات مبيعات المؤسسات (مستخرجة من ملف Client Database.xlsx)
const institutionsData = [
    { date: "15/01/2024", client: "جمعية العواونة الزراعية", product: "الفلتر اليدوي", qty: 2, total: "12,000 ج.م", status: "مدفوع (نقدي)" },
    { date: "02/02/2024", client: "شركة راية للاندسكيب", product: "الفلتر الذكي", qty: 1, total: "17,000 ج.م", status: "مدفوع (نقدي)" }
    // يمكن إضافة باقي السجلات هنا
];

// دالة لتعبئة الجداول بالبيانات
function populateTables() {
    const indTable = document.querySelector("#individuals-table tbody");
    const instTable = document.querySelector("#institutions-table tbody");

    if(indTable) {
        individualsData.forEach(client => {
            let row = `<tr>
                <td>${client.id}</td>
                <td>${client.name}</td>
                <td>${client.nationalId}</td>
                <td dir="ltr" style="text-align:right;">${client.phone}</td>
            </tr>`;
            indTable.innerHTML += row;
        });
    }

    if(instTable) {
        institutionsData.forEach(sale => {
            let row = `<tr>
                <td>${sale.date}</td>
                <td>${sale.client}</td>
                <td>${sale.product}</td>
                <td>${sale.qty}</td>
                <td>${sale.total}</td>
                <td>${sale.status}</td>
            </tr>`;
            instTable.innerHTML += row;
        });
    }
}

// منطق تسجيل دخول الإدارة البسيط (لغرض العرض Frontend)
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;
            const errorMsg = document.getElementById("login-error");

            // بيانات الدخول (للتجربة: admin / 12345)
            if (user === "admin" && pass === "12345") {
                document.getElementById("login-screen").style.display = "none";
                document.getElementById("dashboard-screen").style.display = "block";
                populateTables(); // استدعاء البيانات فقط بعد الدخول الناجح
            } else {
                errorMsg.style.display = "block";
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            document.getElementById("dashboard-screen").style.display = "none";
            document.getElementById("login-screen").style.display = "block";
            document.getElementById("password").value = "";
        });
    }
});
