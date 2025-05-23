export default function Header() {
	return (
		<header>
			<div id="HeaderEffectWrapper"></div>
			<h1
				id="SiteTitle"
				onClick={() => {
					// TODO insert the summonKirby code
					// summonKirby()
				}}
			>
				SmiteBuildMaker
			</h1>
			<h2 id="SitePatch">V6.0.3 (Alpha) SMITE 11.5.1</h2>
			<nav>
				<div id="Information">
					<a href="/info">
						<img alt="Information" src="./Assets/Icons/Question_Gray.png" />
					</a>
				</div>
				<div id="News">
					<a href="/news">
						<img alt="News" src="./Assets/Icons/Exclamation.png" />
					</a>
				</div>
				<div id="Files">
					<a href="/files">
						<img alt="Files" src="./Assets/Icons/Folder.png" />
					</a>
				</div>
				<div id="Language">
					<a href="/languages">
						<img alt="Languages" src="./Assets/Icons/Flag.png" />
					</a>
				</div>
				<div id="Lookup">
					<a href="/playerlookup">
						<img alt="Lookup" src="./Assets/Icons/Asterisk.png" />
					</a>
				</div>
			</nav>
		</header>
	);
}
