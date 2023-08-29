const notificationsAmountEl = document.getElementById('notification-amount') as HTMLDivElement;
const notificationsResetEl = document.getElementById('notification-reset') as HTMLButtonElement;
const notificationListEl = document.querySelectorAll('ul li');

const notificationArray: Element[] = [];

const getNotificationAmount = (list: NodeListOf<Element>): void => {
	list.forEach((item) => {
		if (item.classList.contains('new')) {
			notificationArray.push(item);

			const div = document.createElement('div');
			div.classList.add('notification-dot');
			const container = item.firstElementChild?.lastElementChild?.firstElementChild as HTMLDivElement;
			container.append(div);
		}
	});

	const amount = notificationArray.length.toString();
	notificationsAmountEl.textContent = amount;
};

const checkNotifications = (list: NodeListOf<Element>): void => {
	list.forEach((item, index) => {
		if (item.classList.contains('new')) {
			notificationArray.splice(index);

			item.classList.remove('new');
			const container = item.firstElementChild?.lastElementChild?.firstElementChild as HTMLDivElement;
			container.remove();
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
