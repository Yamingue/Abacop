const code_data = [
    {
        title:"La signalisation routière",
        image:require("../Assets/code1.png"),
        text:`La signalisation routière est omniprésente sur le réseau routier français, et comprend notamment le marquage au sol et les différents panneaux.

        La signalisation horizontale
        Le marquage au sol comprend l’ensemble des informations présentes directement sur la chaussée, et qui délivrent des informations utiles comme :
        
        les lignes médianes, qui peuvent être continues ou discontinues, et qui permettent de séparer les différentes voies de circulation
        les lignes de rives, qui créent une démarcation entre l’accotement et la chaussée
        les flèches, qui permettent d’indiquer les directions associées à chaque voie de circulation
        les lignes transversales, qui indiquent où céder le passage (STOP, Cédez-le-passage, feux tricolores), où traverser (passages piétons), etc …`
    },
    {
        title:"La signalisation verticale",
        image:require("../Assets/code2.jpg"),
        text:`La signalisation verticale comprend les différents panneaux, mais aussi :

        les bornes de localisation, complétées par une lettre spécifiant la nature de la voie empruntée
        les balises, qui peuvent indiquer un obstacle (1), un virage (3), un renforcement du marquage continu (7), une intersection (10), etc …`
    },
    {
        title:"Les panneaux de signalisation",
        image:require("../Assets/code3.png"),
        text:`Les panneaux sont présents partout sur le réseau routier. Il est important de savoir les interpréter rapidement pour comprendre leur message et adapter son comportement.

        `
    },
    {
        title:"Les différentes formes des panneaux",
        image:require("../Assets/code4.jpg"),
        text:`Ils peuvent être de différentes formes, notamment :

        triangulaires (danger)
        ronds (prescription)
        carrés (indication)
        flèches (direction)
        Les différentes couleurs des panneaux
        Ils peuvent également être de différentes couleurs :
        
        rouge (interdiction ou danger)
        bleu (obligation ou indication)
        jaune (temporaire)
        vert ou marron (différents types de localisations)
        Les différents symboles des panneaux
        Ils peuvent comporter différents symboles permettant de spécifier les dangers, les prescriptions et les indications fournies.`
    },
    {
        title:"Les différentes intersections",
        image:require("../Assets/code5.jpg"),
        text:`Les intersections sont les espaces où se croisent plusieurs routes, et où s'applique un ordre de traversée précis, permettant de réduire les risques de collision.

        Un candidat doit savoir reconnaître les différentes formes d’intersections (en T, en Y, en croix, en étoile, mais aussi les rond-points et les carrefours à sens giratoire) et quel ordre de traversée doit y être appliqué, notamment grâce aux différents signaux indiquant les ordres de priorité et au marquage au sol.`
    },
    {
        title:"Les règles de la circulation routière",
        image:require("../Assets/code6.png"),
        text:`Les automobilistes doivent impérativement suivre un certain nombre d'obligations lorsqu’ils circulent. Ils doivent notamment savoir se positionner correctement sur la chaussée (sur la voie la plus à droite de la direction souhaitée, sauf en cas de dépassement), et doivent penser à réaliser leurs contrôles visuels et à bien utiliser leur clignotant avant de changer de direction, comme le stipule la réglementation.

        Les limitations de vitesse
        Les candidats doivent, grâce à leur formation, connaître les différentes limitations appliquées en fonction du type de voie où ils circulent.
        
        Les limitations en agglomération :
        20 km/h pour les zones de rencontre
        30 km/h pour les zones 30
        50 km/h dans le reste des agglomérations (et sur toutes les routes en cas de visibilité inférieure à 50 mètres)
        Les limitations hors-agglomération
        80 km/h pour les routes à double sens de circulation (sauf sur les créneaux de dépassement où la elle est limitée à 90 km/h)
        110 km/h  pour les voies à chaussées séparées (100 km/h en cas de précipitations)
        130 km/h pour les autoroutes (110 km/h en cas de précipitations)`
    },
    {
        title:"Évaluer et ajuster sa vitesse",
        image:require("../Assets/code7.png"),
        text:`En plus d’appliquer ce qu'ils ont appris durant leur formation, les automobilistes doivent veiller à évaluer leur vitesse et à l’adapter à leur environnement de conduite (forte affluence, configuration de la chaussée, travaux et autres risques, …) afin de réduire leur distance de freinage (qui est de 12 mètres à 50 km/h et atteint 83 mètres à 130 km/h).`
    },
    {
        title:"Les croisements et les dépassements",
        image:require("../Assets/code8.jpg"),
        text:`Les automobilistes seront amenés à conduire en présence de nombreux autres chauffeurs, qu’ils devront croiser ou dépasser en fonction des situations.

        La réglementation liée aux croisements
        Les automobilistes doivent savoir que la priorité est laissée au véhicule le plus lourd dans les croisements difficiles, et qu'ils devront adapter leur comportement en conséquence.`
    },
    {
        title:"Règles liées aux dépassements",
        image:require("../Assets/code9.png"),
        text:`Avant de réaliser un dépassement, les automobilistes doivent vérifier qu'ils peuvent dépasser sans risque. Pour cela, ils doivent :

        s’assurer que le dépassement est autorisé
        s’assurer que la visibilité vers l’avant est suffisante
        s’assurer que leur manœuvre ne gênera pas de chauffeur à l’avant comme à l’arrière
        Une fois toutes ces vérifications faites, les automobilistes pourront réaliser leurs contrôles visuels, actionner leur clignotant et concrétiser leur manœuvre de dépassement sans représenter un danger.`
    },
    {
        title:"Le stationnement et l’arrêt des véhicules",
        image:require("../Assets/code10.jpg"),
        text:`Les futurs automobilistes doivent apprendre à reconnaître les éléments indiquant s’ils peuvent stationner ou s'arrêter, et ceci en fonction de leur environnement de circulation. Ils pourront obtenir ces informations grâce aux différents éléments verticaux signalant une interdiction de stationner ou de s’arrêter, mais aussi grâce à la ligne jaune, qui peut être continue ou discontinue.`
    },
    {
        title:"Conduire une automobile",
        image:require("../Assets/code10.jpg"),
        text:`Apprendre le code de la route c'est aussi connaître certaines spécificités liées à la conduite, comme :

        l’exploration visuelle, qui passe notamment par la vérification des angles morts, qui sont les espaces non visibles dans les rétroviseurs, avant un changement de direction
        définir une stratégie de conduite, qui leur permet d’analyser la situation, de la comprendre et d’agir en conséquence
        la connaissance des situations à risques et comment éviter une collision grâce à la communication avec les autres chauffeurs grâce aux clignotants, le respect des intervalles de sécurité, l’adaptation de la vitesse ou encore la nécessité de s’arrêter à temps pour éviter les collisions multiples.
        `
    },
]
export default code_data