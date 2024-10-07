export default function printJsonObject(_) {
	printImage ('[data-user-image]');
	printName (_.name, '[data-user-name]');
	printLogin (_.login, '[data-user-login]');
	printDate (_.created_at, '[data-user-date]');
	printBio (_.bio, '[data-user-bio]');
	printRepos (_.public_repos, '[data-user-repos]');
	printFollowers (_.followers, '[data-user-followers]');
	printFollowing (_.following, '[data-user-following]');
	printLocation (_.location, '[data-user-location]');
	printBlog (_.blog, '[data-user-blog]');
	printTwitter (_.twitter_username, '[data-user-twitter]');
	printCompany (_.company, '[data-user-company]');

	function printImage (target) {
		const element = document.querySelector(target);
		element ? element.setAttribute('src', _.avatar_url) : null;
	}

	function printName (name, target) {
		document.querySelector(target).innerHTML = name;
	}

	function printLogin (login, target) {
		document.querySelector(target).innerHTML = login;
	}

	function printDate (login, target) {
		document.querySelector(target).innerHTML = login;
	}

	function printBio (bio, target) {
		document.querySelector(target).innerHTML = bio;
	}

	function printRepos (repos, target) {
		document.querySelector(target).innerHTML = repos;
	}

	function printFollowers (followers, target) {
		document.querySelector(target).innerHTML = followers;
	}

	function printFollowing (following, target) {
		document.querySelector(target).innerHTML = following;
	}

	function printLocation (location, target) {
		document.querySelector(target).innerHTML = location || 'Not available';
	}

	function printBlog (blog, target) {
		document.querySelector(target).innerHTML = blog || 'Not available';
	}

	function printTwitter (twitter, target) {
		document.querySelector(target).innerHTML = twitter || 'Not available';
	}

	function printCompany (company, target) {
		document.querySelector(target).innerHTML = company || 'Not available';
	}
}