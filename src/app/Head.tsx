/*

    // <script>
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    //
    // gtag('config', 'G-92TXDFR3PZ');
    // </script>

*/

export default function Head() {
	return (
		<head>
			<meta charSet="UTF-8" />
			<meta
				name="keywords"
				content="SMITE, Smite, SBM, SmiteBuildMaker, HiRez, TitanForge, MOBA"
			/>
			<meta name="description" content="Online SMITE Build Maker!" />
			<meta name="author" content="Michael Warmbier" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="Content-Type" content-type="text/html; charset=utf-8" />

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="*" /> */}
			<link
				href="https://fonts.googleapis.com/css2?family=Nova+Square&family=Roboto&family=Roboto+Mono&family=Rubik+Burned&display=swap"
				rel="stylesheet"
			/>
			<link href="./Styles/MainStyle.css" rel="stylesheet" type="text/css" />
			<link rel="shortcut icon" type="image/png" href="./Assets/favicon.png" />

			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-92TXDFR3PZ"
			></script>

			<title>SmiteBuildMaker</title>
		</head>
	);
}
