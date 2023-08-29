// Global Variables
const notificationsAmountEl = document.getElementById('notification-amount') as HTMLDivElement;
const notificationsResetEl = document.getElementById('notification-reset') as HTMLButtonElement;
const notificationListEl = document.querySelectorAll('ul li');

// Array with the app state
const notificationArray: Element[] = [];

// Rendering new notifications
const getNotificationAmount = (list: NodeListOf<Element>): void => {
	list.forEach((item) => {
		if (item.classList.contains('new')) {
			notificationArray.push(item);

			const div = document.createElement('div');
			div.classList.add('notification-dot');
			const container = item.firstElementChild.lastElementChild.firstElementChild;
			container?.appendChild(div);
		}
	});

	const amount = notificationArray.length.toString();
	notificationsAmountEl.textContent = amount;
};

// Unmarking new notifications
const checkNotifications = (list: NodeListOf<Element>): void => {
	list.forEach((item, index) => {
		if (item.classList.contains('new')) {
			notificationArray.splice(index);
			item.classList.remove('new');
			const container = item.firstElementChild.lastElementChild.firstElementChild?.lastElementChild;
			container?.remove();
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
