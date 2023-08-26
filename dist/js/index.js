"use strict";
const notificationsAmountEl = document.getElementById('notification-amount');
const notificationsResetEl = document.getElementById('notification-reset');
const notificationListEl = document.querySelectorAll('ul li');
const notificationArray = [];
const getNotificationAmount = (list) => {
    list.forEach((item) => {
        if (item.classList.contains('new')) {
            notificationArray.push(item);
            const div = document.createElement('div');
            div.classList.add('notification-dot');
            item.firstElementChild?.lastElementChild.firstElementChild.append(div);
        }
    });
    const amount = notificationArray.length.toString();
    notificationsAmountEl.textContent = amount;
};
const checkNotifications = (list) => {
    list.forEach((item, index) => {
        if (item.classList.contains('new')) {
            notificationArray.splice(index);
            item.classList.remove('new');
            item.firstElementChild?.lastElementChild?.firstElementChild?.lastElementChild.remove();
        }
    });
    const amount = notificationArray.length.toString();
    notificationsAmountEl.textContent = amount;
};
const initApp = () => {
    getNotificationAmount(notificationListEl);
    notificationsResetEl.addEventListener('click', () => checkNotifications(notificationListEl));
};
document.addEventListener('DOMContentLoaded', initApp);
//# sourceMappingURL=index.js.map