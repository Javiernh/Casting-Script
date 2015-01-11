// ==UserScript==
// @name        Casting Script
// @namespace   Script Mush pour les Castings
// @description Script Mush pour les Castings
// @downloadURL https://github.com/badconker/Casting-Script/raw/master/Casting_Script.user.js
// @include     http://mush.vg/g/*
// @include     http://mush.vg/group/*
// @version     1.5
// ==/UserScript==

Casting = function() {}
Casting.mm = function() {}
Casting.mm.version = 1.0;
Casting.mm.group = "Les Maîtres Mushiens";
Casting.mm.urlgroup = "http://mush.vg/g/les-maitres-mushiens";
Casting.mm.author = "BSimo (remis au goût du jour par badconker)";
Casting.mm.urlautor = "http://twinoid.com/user/3138322";
Casting.mm.window = window;
Casting.mm.location = "";

Casting.mm.init = function() {
	var url = Casting.mm.window.location.href;
	if(url.split("/").length > 5) Casting.mm.location = url.split("/")[5];
	else Casting.mm.location = "center";

	switch(Casting.mm.location) {
		case "center":
			Casting.mm.center.init();
		break;

		default:
	}
}

Casting.mm.addSlashes = function (text) {
	text = text.replace(/\\/g, "\\\\");
	text = text.replace(/'/g, "\\'");
	return text;
}

Casting.mm.center = {};
Casting.mm.center.info = {};
Casting.mm.center.INFO_RANGS = [];
	Casting.mm.center.INFO_RANGS['Non opérationnel'] = [];
		Casting.mm.center.INFO_RANGS['Non opérationnel']['rang'] = 0;
		Casting.mm.center.INFO_RANGS['Non opérationnel']['before'] = "";
		Casting.mm.center.INFO_RANGS['Non opérationnel']['next'] = "Débutant";
		Casting.mm.center.INFO_RANGS['Non opérationnel']['max'] = 32;
		Casting.mm.center.INFO_RANGS['Non opérationnel']['need'] = 32;
		Casting.mm.center.INFO_RANGS['Non opérationnel']['lvlup'] = 50;
		Casting.mm.center.INFO_RANGS['Non opérationnel']['img'] = "no_mush_bar";
		Casting.mm.center.INFO_RANGS['Non opérationnel']['infotext'] = "";
	Casting.mm.center.INFO_RANGS['Débutant'] = [];
		Casting.mm.center.INFO_RANGS['Débutant']['rang'] = 1;
		Casting.mm.center.INFO_RANGS['Débutant']['before'] = "Non opérationnel";
		Casting.mm.center.INFO_RANGS['Débutant']['next'] = "Café-théâtre";
		Casting.mm.center.INFO_RANGS['Débutant']['max'] = 48;
		Casting.mm.center.INFO_RANGS['Débutant']['need'] = 32;
		Casting.mm.center.INFO_RANGS['Débutant']['lvlup'] = 25;
		Casting.mm.center.INFO_RANGS['Débutant']['img'] = "no_mush_bar";
		Casting.mm.center.INFO_RANGS['Débutant']['infotext'] = "Offert l'option : Mush cachés.<br/>La taille maximale du casting passe à 48 joueurs.<br/><em>Vous êtes un groupe qui s'est réuni pour démarrer la vie d'artiste. Pour l'instant vous en êtes à faire la manche avec une guitare dans le métro à Pyong Yang.</em>";
	Casting.mm.center.INFO_RANGS['Café-théâtre'] = [];
		Casting.mm.center.INFO_RANGS['Café-théâtre']['rang'] = 2;
		Casting.mm.center.INFO_RANGS['Café-théâtre']['before'] = "Débutant";
		Casting.mm.center.INFO_RANGS['Café-théâtre']['next'] = "Soldat de fortune";
		Casting.mm.center.INFO_RANGS['Café-théâtre']['max'] = 64;
		Casting.mm.center.INFO_RANGS['Café-théâtre']['need'] = 32;
		Casting.mm.center.INFO_RANGS['Café-théâtre']['lvlup'] = 125;
		Casting.mm.center.INFO_RANGS['Café-théâtre']['img'] = "too_slow";
		Casting.mm.center.INFO_RANGS['Café-théâtre']['infotext'] = "Débloque l'option Jeu Lent qui porte les cycles à 4 h.<br/>La taille maximale du casting passe à 64 joueurs.<br/><em>On ne s'endort plus pendant vos films... normal personne ne vous regarde.</em>";
	Casting.mm.center.INFO_RANGS['Soldat de fortune'] = [];
		Casting.mm.center.INFO_RANGS['Soldat de fortune']['rang'] = 3;
		Casting.mm.center.INFO_RANGS['Soldat de fortune']['before'] = "Café-théâtre";
		Casting.mm.center.INFO_RANGS['Soldat de fortune']['next'] = "Troupe de province";
		Casting.mm.center.INFO_RANGS['Soldat de fortune']['max'] = 80;
		Casting.mm.center.INFO_RANGS['Soldat de fortune']['need'] = 32;
		Casting.mm.center.INFO_RANGS['Soldat de fortune']['lvlup'] = 250;
		Casting.mm.center.INFO_RANGS['Soldat de fortune']['img'] = "troopers";
		Casting.mm.center.INFO_RANGS['Soldat de fortune']['infotext'] = "Soldat de fortune</h1>Débloque les Scripts et la Table de Triomphe. Passe le nombre minimal de joueur pour lancer un vaisseau à 24.<br/>La taille maximale du casting passe à 80 joueurs.<br/><em>Vous avez déjà convaincu des gens ? C\'est plus dur que des moutons...quoique...</em>";
	Casting.mm.center.INFO_RANGS['Troupe de province'] = [];
		Casting.mm.center.INFO_RANGS['Troupe de province']['rang'] = 4;
		Casting.mm.center.INFO_RANGS['Troupe de province']['before'] = "Soldat de fortune";
		Casting.mm.center.INFO_RANGS['Troupe de province']['next'] = "Bar lounge";
		Casting.mm.center.INFO_RANGS['Troupe de province']['max'] = 88;
		Casting.mm.center.INFO_RANGS['Troupe de province']['need'] = 24;
		Casting.mm.center.INFO_RANGS['Troupe de province']['lvlup'] = 400;
		Casting.mm.center.INFO_RANGS['Troupe de province']['img'] = "mushruvery";
		Casting.mm.center.INFO_RANGS['Troupe de province']['infotext'] = "Débloque Andie et Derek !<br/>La taille maximale du casting passe à 88 joueurs.<br/><em>Vous savez haranguer les foules sur les plages de Neptune</em>";
	Casting.mm.center.INFO_RANGS['Bar lounge'] = [];
		Casting.mm.center.INFO_RANGS['Bar lounge']['rang'] = 5;
		Casting.mm.center.INFO_RANGS['Bar lounge']['before'] = "Troupe de province";
		Casting.mm.center.INFO_RANGS['Bar lounge']['next'] = "Colleur d'affiche";
		Casting.mm.center.INFO_RANGS['Bar lounge']['max'] = 104;
		Casting.mm.center.INFO_RANGS['Bar lounge']['need'] = 24;
		Casting.mm.center.INFO_RANGS['Bar lounge']['lvlup'] = 600;
		Casting.mm.center.INFO_RANGS['Bar lounge']['img'] = "triple_play";
		Casting.mm.center.INFO_RANGS['Bar lounge']['infotext'] = "Débloque l'option Triple Mush.<br/>La taille maximale du casting passe à 104 joueurs.<br/><em>Vous êtes capable de faire un film sans script.</em>";
	Casting.mm.center.INFO_RANGS['Colleur d\'affiche'] = [];
		Casting.mm.center.INFO_RANGS['Colleur d\'affiche']['rang'] = 6;
		Casting.mm.center.INFO_RANGS['Colleur d\'affiche']['before'] = "Bar lounge";
		Casting.mm.center.INFO_RANGS['Colleur d\'affiche']['next'] = "Opéra-Bouffe";
		Casting.mm.center.INFO_RANGS['Colleur d\'affiche']['max'] = 112;
		Casting.mm.center.INFO_RANGS['Colleur d\'affiche']['need'] = 24;
		Casting.mm.center.INFO_RANGS['Colleur d\'affiche']['lvlup'] = 850;
		Casting.mm.center.INFO_RANGS['Colleur d\'affiche']['img'] = "page";
		Casting.mm.center.INFO_RANGS['Colleur d\'affiche']['infotext'] = "Débloque l'option Jeu Beta.<br/>La taille maximale du casting passe à 112 joueurs.<br/><em>Vous avez compris que la comm sert à quelque chose.</em>";
	Casting.mm.center.INFO_RANGS['Opéra-Bouffe'] = [];
		Casting.mm.center.INFO_RANGS['Opéra-Bouffe']['rang'] = 7;
		Casting.mm.center.INFO_RANGS['Opéra-Bouffe']['before'] = "Colleur d'affiche";
		Casting.mm.center.INFO_RANGS['Opéra-Bouffe']['next'] = "Nains de jardin";
		Casting.mm.center.INFO_RANGS['Opéra-Bouffe']['max'] = 128;
		Casting.mm.center.INFO_RANGS['Opéra-Bouffe']['need'] = 24;
		Casting.mm.center.INFO_RANGS['Opéra-Bouffe']['lvlup'] = 1100;
		Casting.mm.center.INFO_RANGS['Opéra-Bouffe']['img'] = "swift_fungus";
		Casting.mm.center.INFO_RANGS['Opéra-Bouffe']['infotext'] = "Débloque l'option Jeu Rapide qui porte les cycles à 2h.<br/>La taille maximale du casting passe à 128 joueurs.<br/><em>Vous savez enchaîner deux scènes sans que le décor s\'effondre.</em>";
	Casting.mm.center.INFO_RANGS['Nains de jardin'] = [];
		Casting.mm.center.INFO_RANGS['Nains de jardin']['rang'] = 8;
		Casting.mm.center.INFO_RANGS['Nains de jardin']['before'] = "Opéra-Bouffe";
		Casting.mm.center.INFO_RANGS['Nains de jardin']['next'] = "Orchestre";
		Casting.mm.center.INFO_RANGS['Nains de jardin']['max'] = 144;
		Casting.mm.center.INFO_RANGS['Nains de jardin']['need'] = 24;
		Casting.mm.center.INFO_RANGS['Nains de jardin']['lvlup'] = 1400;
		Casting.mm.center.INFO_RANGS['Nains de jardin']['img'] = "dream_theater";
		Casting.mm.center.INFO_RANGS['Nains de jardin']['infotext'] = "Débloque le départ manuel des vaisseaux pour ce casting.<br/>La taille maximale du casting passe à 144 joueurs.<br/><em>Vous animez les barbecues Martien efficacement.</em>";
	Casting.mm.center.INFO_RANGS['Orchestre'] = [];
		Casting.mm.center.INFO_RANGS['Orchestre']['rang'] = 9;
		Casting.mm.center.INFO_RANGS['Orchestre']['before'] = "Nains de jardin";
		Casting.mm.center.INFO_RANGS['Orchestre']['next'] = "Ballet National";
		Casting.mm.center.INFO_RANGS['Orchestre']['max'] = 160;
		Casting.mm.center.INFO_RANGS['Orchestre']['need'] = 24;
		Casting.mm.center.INFO_RANGS['Orchestre']['lvlup'] = 1700;
		Casting.mm.center.INFO_RANGS['Orchestre']['img'] = "beta_phases";
		Casting.mm.center.INFO_RANGS['Orchestre']['infotext'] = "La taille maximale du casting passe à 160 joueurs.<br/><em>On peut vous faire confiance pour animer une soirée dans un hospice lunaire.</em>";
	Casting.mm.center.INFO_RANGS['Ballet National'] = [];
		Casting.mm.center.INFO_RANGS['Ballet National']['rang'] = 10;
		Casting.mm.center.INFO_RANGS['Ballet National']['before'] = "Orchestre";
		Casting.mm.center.INFO_RANGS['Ballet National']['next'] = "Opéra";
		Casting.mm.center.INFO_RANGS['Ballet National']['max'] = 176;
		Casting.mm.center.INFO_RANGS['Ballet National']['need'] = 24;
		Casting.mm.center.INFO_RANGS['Ballet National']['lvlup'] = 2050;
		Casting.mm.center.INFO_RANGS['Ballet National']['img'] = "sleeping_beauty";
		Casting.mm.center.INFO_RANGS['Ballet National']['infotext'] = "Débloque l'option Mush en sommeil.<br/>La taille maximale du casting passe à 176 joueurs.<br/><em>On a failli vous embaucher pour un grand film une fois.</em>";
	Casting.mm.center.INFO_RANGS['Opéra'] = [];
		Casting.mm.center.INFO_RANGS['Opéra']['rang'] = 11;
		Casting.mm.center.INFO_RANGS['Opéra']['before'] = "Ballet National";
		Casting.mm.center.INFO_RANGS['Opéra']['next'] = "Maison de production";
		Casting.mm.center.INFO_RANGS['Opéra']['max'] = 192;
		Casting.mm.center.INFO_RANGS['Opéra']['need'] = 24;
		Casting.mm.center.INFO_RANGS['Opéra']['lvlup'] = 2400;
		Casting.mm.center.INFO_RANGS['Opéra']['img'] = "whos_ugly";
		Casting.mm.center.INFO_RANGS['Opéra']['infotext'] = "Débloque l'option Jeu Sans Mush.Passe le nombre minimal de joueur pour lancer un vaisseau à 16.<br/>La taille maximale du casting passe à 192 joueurs.<br/><em>La classe internationale sur une lune de province.</em>";
	Casting.mm.center.INFO_RANGS['Maison de production'] = [];
		Casting.mm.center.INFO_RANGS['Maison de production']['rang'] = 12;
		Casting.mm.center.INFO_RANGS['Maison de production']['before'] = "Opéra";
		Casting.mm.center.INFO_RANGS['Maison de production']['next'] = "Société événementielle";
		Casting.mm.center.INFO_RANGS['Maison de production']['max'] = 208;
		Casting.mm.center.INFO_RANGS['Maison de production']['need'] = 24;
		Casting.mm.center.INFO_RANGS['Maison de production']['lvlup'] = 2800;
		Casting.mm.center.INFO_RANGS['Maison de production']['img'] = "fight";
		Casting.mm.center.INFO_RANGS['Maison de production']['infotext'] = "La taille maximale du casting passe à 208 joueurs.<br/><em>LE grand spectacle son et lumière en avant-première d'un rocker excentrique millénaire.</em>";
	Casting.mm.center.INFO_RANGS['Société événementielle'] = [];
		Casting.mm.center.INFO_RANGS['Société événementielle']['rang'] = 13;
		Casting.mm.center.INFO_RANGS['Société événementielle']['before'] = "Maison de production";
		Casting.mm.center.INFO_RANGS['Société événementielle']['next'] = "Légende";
		Casting.mm.center.INFO_RANGS['Société événementielle']['max'] = 224;
		Casting.mm.center.INFO_RANGS['Société événementielle']['need'] = 24;
		Casting.mm.center.INFO_RANGS['Société événementielle']['lvlup'] = 3200;
		Casting.mm.center.INFO_RANGS['Société événementielle']['img'] = "blitz";
		Casting.mm.center.INFO_RANGS['Société événementielle']['infotext'] = "Débloque l'option Jeu Blitz qui porte les cycles à 1h.<br/>La taille maximale du casting passe à 224 joueurs.<br/><em>Le spectacle vivant, c'est ça qui vous fait vibrer !</em>";
	Casting.mm.center.INFO_RANGS['Légende'] = [];
		Casting.mm.center.INFO_RANGS['Légende']['rang'] = 14;
		Casting.mm.center.INFO_RANGS['Légende']['before'] = "Société événementielle";
		Casting.mm.center.INFO_RANGS['Légende']['next'] = "";
		Casting.mm.center.INFO_RANGS['Légende']['max'] = 256;
		Casting.mm.center.INFO_RANGS['Légende']['need'] = 16;
		Casting.mm.center.INFO_RANGS['Légende']['lvlup'] = 0;
		Casting.mm.center.INFO_RANGS['Légende']['img'] = "legend";
		Casting.mm.center.INFO_RANGS['Légende']['infotext'] = "La taille maximale du casting passe à 256 joueurs.<br/><em>Votre spectacle est exceptionnel.</em>";
Casting.mm.center.init = function() {
	Casting.mm.center.css();
	Casting.mm.center.recupInfo();
	Casting.mm.center.dispNewInfo();
}

Casting.mm.center.css = function() {
	$("<style>").attr("type", "text/css").html("\
		.floatInfo {\
			float: right;\
			margin: 15px 15px 0px 0px;\
		}\
		.floatText {\
			margin-bottom: 5px;\
		}\
		.floatRejPret {\
			float: right;\
			margin: 0px 15px 15px 0px;\
			position:relative;\
			top:-20px;\
		}\
		.xpcompletion .compframe {\
			width : 280px;\
			height : 33px;\
			background : transparent url(\"/img/design/xp_completion.png\") no-repeat left top;\
			padding-left : 10px;\
			padding-top : 1px;\
			display : inline-block;\
			zoom : 1;\
			*display : inline;\
			vertical-align : top;\
		}\
		.xpcompletion .compText {\
			position: relative;\
			top: -17px;\
			text-align: center;\
			font-size: 8pt;\
		}\
		.xpcompletion .fill {\
			background : transparent url(\"/img/design/xp_completion_fill.png\") no-repeat left top;\
			width : 262px;\
			height : 17px;\
			margin-left : 3px;\
			margin-top : 3px;\
		}\
		.xpcompletion .numb {\
			display : inline-block;\
			zoom : 1;\
			*display : inline;\
			vertical-align : top;\
			font-family : \"Days One\", \"Segoe UI\", \"Lucida Grande\", \"Trebuchet MS\", Arial, \"lucida sans unicode\", sans-serif;\
			font-weight : normal;\
			font-size : 13pt;\
		}\
		.butWidth {\
			margin: auto !important;\
			float: none !important;\
		}\
		.boxTwoWidth {\
			float: left;\
			margin-right: 10px;\
			width: 65%;\
		}\
	").appendTo("head");
	$("<link href=\"http://fonts.googleapis.com/css?family=Days+One\" rel=\"stylesheet\" type=\"text/css\">").appendTo("head");
}

Casting.mm.center.recupInfo = function() {
	$("#castingFeed").css({display: "none"});
	$(".twinstyle").each(function(index, data) {
		$(this).attr("name", $(this).find(".cornerright").text().replace(/\t/g, '').replace(/\n/g, ''));
	});
	Casting.mm.center.info.username = $("a[href^=\"http://mush.vg/u/profile/\"] span").text();
	Casting.mm.center.info.nameGroup = $(".glow").text();
	Casting.mm.center.info.idGroup = $(".groups").attr("data-gid");
	Casting.mm.center.info.effect = $(".nameUnit .tid_user");
	$.each(Casting.mm.center.info.effect, function(index, data) { Casting.mm.center.info.effect[index] = $(this).text().replace(/\t/g, '').replace(/\n/g, ''); });
	Casting.mm.center.info.effectIG = $("img[src=\"/img/icons/ui/in_game.png\"]");
	$.each(Casting.mm.center.info.effectIG, function(index, data) { Casting.mm.center.info.effectIG[index] = $(this).parent().html()});
	Casting.mm.center.info.effectWait = $("img[src=\"/img/icons/ui/not_ready.png\"]");
	$.each(Casting.mm.center.info.effectWait, function(index, data) { Casting.mm.center.info.effectWait[index] = $(this).parent().html()});
	Casting.mm.center.info.effectPret = $("img[src=\"/img/icons/ui/ready.png\"]");
	$.each(Casting.mm.center.info.effectPret, function(index, data) { Casting.mm.center.info.effectPret[index] = $(this).parent().html()});
	Casting.mm.center.info.userInCast = $(".twinstyle[name=\"Investissement\"]").find(".boxContent").children().length > 0;

	Casting.mm.center.info.btnInvest = (Casting.mm.center.info.userInCast) ? $(".twinstyle[name=\"Investissement\"]").find(".boxContent > div").html() : false;
	Casting.mm.center.info.btnRejPret = $(".twinstyle[name=\"Mes Actions\"]").find(".boxContent").html();
	$(".twinstyle").each(function() {
		var name = $(this).find(".cornerright").text().replace(/\t/g, '').replace(/\n/g, '');
		switch(name) {
			case "Statistiques" :
				Casting.mm.center.info.stats = {};
				$(this).find("li").each(function(index) {
					var text = $(this).text().replace(/\t/g, '').replace(/\n/g, '').split(":")[1];
					switch(index) {
						case 0 : // Rang
							Casting.mm.center.info.stats.rang = text;
						break;
						case 1 : // Réalisateur
							Casting.mm.center.info.stats.realisateur = $(this).html().replace(/\t/g, '').replace(/\n/g, '').split("</span>")[1];
						break;
						case 2 : // Options
							Casting.mm.center.info.stats.optionsunlock = $(this).html();
						case 3 : // XP ou Inverstit
							Casting.mm.center.info.stats.xp = text.split(" / ")[0];
						break;
						case 6 : // Status
							Casting.mm.center.info.stats.statut = (text == "  opérationel") ? true : false;
							if(!Casting.mm.center.info.stats.statut) Casting.mm.center.info.stats.rang = "Non opérationnel";
						break;
						case 7 : // Nb de parties achevées
							Casting.mm.center.info.partieEnd = text;
						break;
						case 10 :
						case 11 : // Investisseurs
							Casting.mm.center.info.invest = $(this).html();
						break;	
						default:
					}
				});
			break;

			default:
		}
	});
}

Casting.mm.center.dispNewInfo = function() {
	var xp = Casting.mm.center.info.stats.xp;
	var rangname = Casting.mm.center.info.stats.rang;
	var lvlup = Casting.mm.center.INFO_RANGS[rangname]['lvlup'];
	var rang = Casting.mm.center.INFO_RANGS[rangname]['rang'];
	var img = Casting.mm.center.INFO_RANGS[rangname]['img'];
	var next = Casting.mm.center.INFO_RANGS[rangname]['next'];

	var max = Casting.mm.center.INFO_RANGS[rangname]['max'];
	var need = Casting.mm.center.INFO_RANGS[rangname]['need'];

	var levelup_before = 0;
	if(Casting.mm.center.INFO_RANGS[rangname]['before'] != ''){
		levelup_before = Casting.mm.center.INFO_RANGS[Casting.mm.center.INFO_RANGS[rangname]['before']]['lvlup'];
	}

	var pourcent = Math.floor(( xp - levelup_before) / (lvlup - levelup_before) * 100);

	var div = $("<div>").attr("id", "castingScript").appendTo(".groups");

	var divRangBloc = $("<div>").addClass("boxMargin boxTwoWidth").appendTo(div);
	var divRang = $("<div><h3><div class=\"cornerright\">Informations sur ce Casting</div></h3></div>").addClass("twinstyle").appendTo(divRangBloc);
	var infobulleXPText = "'<div class=\\\'tiptop\\\'><div class=\\\'tipbottom\\\'><div class=\\\'tipbg\\\'><div class=\\\'tipcontent\\\'><h1>Expérience</h1>Vous avez " + Casting.mm.center.info.stats.xp + " points d\\\'expérience. Il en faut " + Casting.mm.center.INFO_RANGS[Casting.mm.center.info.stats.rang]['lvlup'] + " pour accédez au rang suivant. C\\\'est-à-dire qu\\\'il vous en manque " + (Casting.mm.center.INFO_RANGS[Casting.mm.center.info.stats.rang]['lvlup'] - Casting.mm.center.info.stats.xp) + ". Pour rappel, vous en gagnez 25 par vaisseau lancé et 1 par <img src=&quot;/img/icons/ui/ticket_any.png&quot; style=&quot;display:inline-block; vertical-align:text-bottom;&quot;/> investi.</em></div></div></div></div>'";
	var investHTML = $("<div>").html(Casting.mm.center.info.invest);
	investHTML.find(".spanBox").remove();
	investHTML.html(investHTML.html().split("</div><div").join("</div>, <div"));
	var divRangHTML = '';
	if(typeof(Casting.mm.center.INFO_RANGS[next]) != 'undefined') {
		divRangHTML = "<div class=\"floatInfo\" style=\"text-align: center;\"><div class=\"xpcompletion\" onmouseout=\"Main.hideTip();\" onmouseover=\"Main.showTip(this, " + infobulleXPText + ")\">" +
			"<div class=\"numb\">" + pourcent + "%</div><div class=\"compframe\">" +
			"<div class=\"fill\" style=\"width: " + pourcent + "%;\"></div><div class=\"compText\">Progression jusqu'au niveau suivant</div>" +
			"</div></div>" +
			"<div class=\"floatText\">" + ((rang > 0) ? "Encore " + Math.floor((lvlup - xp) / 25) + " Tournages et " + ((lvlup - xp) - Math.floor((lvlup - xp) / 25) * 25) + " Tickets ou alors, " + (lvlup - xp) + " Tickets." : "Encore " + (lvlup - xp) + " tickets à investir.") + "</div>" +
			"</div>";
	}
	divRangHTML += "<span class=\"spanBox\">Réalistion de :</span> " + Casting.mm.center.info.stats.realisateur + "<br>" +
		Casting.mm.center.info.stats.optionsunlock + "<br>" +
		"<span class=\"spanBox\">Rang :</span> <img onmouseout=\"Main.hideTip()\" onmouseover=\"Main.showTip(this,'" + Casting.mm.addSlashes("<div class='tiptop' ><div class='tipbottom'><div class='tipbg'><div class='tipcontent'><h1>" + rangname + " <span style='font-size: 7pt; font-style: italic;'>(Niv. " + Casting.mm.center.INFO_RANGS[rangname]['rang'] + ")</span></h1>" + Casting.mm.center.INFO_RANGS[rangname]['infotext'] + "</div></div></div></div>") + "')\" src=\"/img/icons/ui/" + img + ".png\"> " + rangname + " <span style=\"font-size: 7pt; font-style: italic;\">(Niv. " + rang + ")</span><br>";
	if(typeof(Casting.mm.center.INFO_RANGS[next]) != 'undefined') {
		divRangHTML += "<span class=\"spanBox\">Prochain rang :</span> <img onmouseout=\"Main.hideTip()\" onmouseover=\"Main.showTip(this,'" + Casting.mm.addSlashes("<div class='tiptop' ><div class='tipbottom'><div class='tipbg'><div class='tipcontent'><h1>" + next + " <span style='font-size: 7pt; font-style: italic;'>(Niv. " + Casting.mm.center.INFO_RANGS[next]['rang'] + ")</span></h1>" + Casting.mm.center.INFO_RANGS[next]['infotext'] + "</div></div></div></div>") + "')\" src=\"/img/icons/ui/" + Casting.mm.center.INFO_RANGS[next]['img'] + ".png\"> " + next + " <span style=\"font-size: 7pt; font-style: italic;\">(Niv. " + (rang + 1)+ ")</span><br>";
	}

	divRangHTML += "<span class=\"spanBox\">Nomdre d'acteurs max. :</span> " + max + " personnes<br>" +
	"<span class=\"spanBox\">Acteurs necessaire :</span> " + need + " personnes<br>" +
	"<span class=\"spanBox\">Nombre d'acteurs actuel :</span> " + Casting.mm.center.info.effect.length + " personnes<br>" +
		((Casting.mm.center.info.userInCast) ? "<div class=\"floatRejPret\">" + Casting.mm.center.info.btnInvest + "</div>" : "") +
	"<div class=\"floatRejPret\">" + Casting.mm.center.info.btnRejPret + "</div>" +
	"<span class=\"spanBox\">Nombre de tournages terminés :</span> " + Casting.mm.center.info.partieEnd + "<br>" +
	"<span class=\"spanBox\">Investisseurs :</span> " + investHTML.html(); +
	"";
	var divRangContent = $("<div>").addClass("boxContent").html(divRangHTML).appendTo(divRang);

	var divOthInfoBloc = $("<div>").addClass("boxMargin boxWidth").appendTo(div);

	var divOthInfo = $("<div><h3><div class=\"cornerright\">Progression Générale</div></h3></div>").addClass("twinstyle boxMargin").appendTo(divOthInfoBloc);
	var divOthInfoHTML = "<span>" + Casting.mm.center.ScenarHTML("Débutant") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Café-théâtre") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Soldat de fortune") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Troupe de province") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Bar lounge") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Colleur d'affiche") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Opéra-Bouffe") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Nains de jardin") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Orchestre") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Ballet National") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Opéra") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Maison de production") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Société événementielle") + "</span> " +
	"<span>" + Casting.mm.center.ScenarHTML("Légende") + "</span>" +
	"";
	var divOthInfoContent = $("<div>").addClass("boxContent").css({"padding-left": 0, "text-align": "center"}).html(divOthInfoHTML).appendTo(divOthInfo);

	var divOthInfo2 = $("<div><h3><div class=\"cornerright\">Lancement des tournages</div></h3></div>").addClass("twinstyle").appendTo(divOthInfoBloc);
	var divOthInfo2HTML = $(".twinstyle[name=\"Lancement du vaisseau\"] .boxContent").html();
	var divOthInfo2Content = $("<div>").addClass("boxContent").html(divOthInfo2HTML).appendTo(divOthInfo2);

	var divOthInfo3HTML = $("a[href*=\"quit\"]").parent().parent().html();
	var divOthInfo3Content = $("<div>").addClass("boxContent").html(divOthInfo3HTML).appendTo(divOthInfoBloc);

	$("<div>").addClass("clear").appendTo(div);

	var divEffectIGBloc = $("<div>").addClass("boxMargin boxWidth").appendTo(div);
	var divEffectIG = $("<div><h3><div class=\"cornerright\">Acteurs en voyage ailleurs (" + Casting.mm.center.info.effectIG.length + ")</div></h3></div>").addClass("twinstyle").appendTo(divEffectIGBloc);
	var divEffectIGHTML = "";
	$.each(Casting.mm.center.info.effectIG, function(index, data) { divEffectIGHTML += "<li class=\"nameUnit inl-blck\">" + data + "</li>"});
	var divEffectIGContent = $("<div>").addClass("boxContent").html(divEffectIGHTML).appendTo(divEffectIG);

	var divEffectWaitBloc = $("<div>").addClass("boxMargin boxWidth").appendTo(div);
	var divEffectWait = $("<div><h3><div class=\"cornerright\">Acteurs en attente (" + Casting.mm.center.info.effectWait.length + ")</div></h3></div>").addClass("twinstyle").appendTo(divEffectWaitBloc);
	var divEffectWaitHTML = "";
	$.each(Casting.mm.center.info.effectWait, function(index, data) { divEffectWaitHTML += "<li class=\"nameUnit inl-blck\">" + data + "</li>"});
	var divEffectWaitContent = $("<div>").addClass("boxContent").html(divEffectWaitHTML).appendTo(divEffectWait);

	var divEffectPretBloc = $("<div>").addClass("boxMargin boxWidth").appendTo(div);
	var divEffectPret = $("<div><h3><div class=\"cornerright\">Acteurs prêt à partir (" + Casting.mm.center.info.effectPret.length + ")</div></h3></div>").addClass("twinstyle").appendTo(divEffectPretBloc);
	var divEffectPretHTML = "";
	$.each(Casting.mm.center.info.effectPret, function(index, data) { divEffectPretHTML += "<li class=\"nameUnit inl-blck\">" + data + "</li>"});
	var divEffectPretContent = $("<div>").addClass("boxContent").html(divEffectPretHTML).appendTo(divEffectPret);

	$("<div>").addClass("clear").appendTo(div);
}

Casting.mm.center.ScenarHTML = function(rang) {
	if(Casting.mm.center.INFO_RANGS[rang]['rang'] <= Casting.mm.center.INFO_RANGS[Casting.mm.center.info.stats.rang]['rang']) {
		return "<img src=\"/img/icons/ui/" + Casting.mm.center.INFO_RANGS[rang]['img'] +".png\" onmouseout=\"Main.hideTip()\" onmouseover=\"Main.showTip(this,'" + Casting.mm.addSlashes("<div class='tiptop' ><div class='tipbottom'><div class='tipbg'><div class='tipcontent'><h1>" + rang + " <span style='font-size: 7pt; font-style: italic;'>(Niv. " + Casting.mm.center.INFO_RANGS[rang]['rang'] + ")</span></h1>" + Casting.mm.center.INFO_RANGS[rang]['infotext'] + "</div></div></div></div>") + "')\">";
	} else {
		return "<img src=\"/img/icons/ui/" + Casting.mm.center.INFO_RANGS[rang]['img'] +"_grey.png\" onmouseout=\"Main.hideTip()\" onmouseover=\"Main.showTip(this,'" + Casting.mm.addSlashes("<div class='tiptop' ><div class='tipbottom'><div class='tipbg'><div class='tipcontent'><h1>" + rang + " <span style='font-size: 7pt; font-style: italic;'>(Niv. " + Casting.mm.center.INFO_RANGS[rang]['rang'] + ")</span></h1>Ce casting n'a pas encore débloqué cette option.</div></div></div></div>") + "')\">";
	}
}

Casting.mm.init();