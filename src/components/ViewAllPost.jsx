import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAllPost = () => {
    const [postData,changePostData] = useState(
        [
        { "userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" },
        { "userId": 1, "id": 2, "title": "qui est esse", "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla" },
        { "userId": 1, "id": 3, "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut", "body": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut" },
        { "userId": 1, "id": 4, "title": "eum et est occaecati", "body": "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit" },
        { "userId": 1, "id": 5, "title": "nesciunt quas odio", "body": "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque" },
        { "userId": 1, "id": 6, "title": "dolorem eum magni eos aperiam quia", "body": "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae" },
        { "userId": 1, "id": 7, "title": "magnam facilis autem", "body": "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas" },
        { "userId": 1, "id": 8, "title": "dolorem dolore est ipsam", "body": "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae" },
        { "userId": 1, "id": 9, "title": "nesciunt iure omnis dolorem tempora et accusantium", "body": "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas" },
        { "userId": 1, "id": 10, "title": "optio molestias id quia eum", "body": "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error" },
        { "userId": 2, "id": 11, "title": "et ea vero quia laudantium autem", "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi commodi" },
        { "userId": 2, "id": 12, "title": "in quibusdam tempore odit est dolorem", "body": "itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio" },
        { "userId": 2, "id": 13, "title": "dolorum ut in voluptas mollitia et saepe quo animi", "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam" },
        { "userId": 2, "id": 14, "title": "voluptatem eligendi optio", "body": "fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorum molestiae beatae sed aut voluptas totam sit illum" },
        { "userId": 2, "id": 15, "title": "eveniet quod temporibus", "body": "reprehenderit quos placeat velit minima officia dolores impedit repudiandae molestiae nam voluptas recusandae quis delectus officiis harum fugiat vitae" },
        { "userId": 2, "id": 16, "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio", "body": "suscipit nam nisi quo aperiam aut asperiores eos fugit maiores voluptatibus quia voluptatem quis ullam qui in alias quia est consequatur magni mollitia accusamus ea nisi voluptate dicta" },
        { "userId": 2, "id": 17, "title": "fugit voluptas sed molestias voluptatem provident", "body": "eos voluptas et aut odit natus earum aspernatur fuga molestiae ullam deserunt ratione qui eos qui nihil ratione nemo velit ut aut id quo" },
        { "userId": 2, "id": 18, "title": "voluptate et itaque vero tempora molestiae", "body": "eveniet quo quis laborum totam consequatur non dolor ut et est repudiandae est voluptatem vel debitis et magnam" },
        { "userId": 2, "id": 19, "title": "adipisci placeat illum aut reiciendis qui", "body": "illum quis cupiditate provident sit magnam ea sed aut omnis veniam maiores ullam consequatur atque adipisci quo iste expedita sit quos voluptas" },
        { "userId": 2, "id": 20, "title": "doloribus ad provident suscipit at", "body": "qui consequuntur ducimus possimus quisquam amet similique suscipit porro ipsam amet eos veritatis officiis exercitationem vel fugit aut necessitatibus totam omnis rerum consequatur expedita quidem cumque explicabo" },
        { "userId": 3, "id": 21, "title": "asperiores ea ipsam voluptatibus modi minima quia sint", "body": "repellat aliquid praesentium dolorem quo sed totam minus non itaque nihil labore molestiae sunt dolor eveniet hic recusandae veniam tempora et tenetur expedita sunt" },
        { "userId": 3, "id": 22, "title": "dolor sint quo a velit explicabo quia nam", "body": "eos qui et ipsum ipsam suscipit aut sed omnis non odio expedita earum mollitia molestiae aut atque rem suscipit nam impedit esse" },
        { "userId": 3, "id": 23, "title": "maxime id vitae nihil numquam", "body": "veritatis unde neque eligendi quae quod architecto quo neque vitae est illo sit tempora doloremque fugit quod et et vel beatae sequi ullam sed tenetur perspiciatis" },
        { "userId": 3, "id": 24, "title": "autem hic labore sunt dolores incidunt", "body": "enim et ex nulla omnis voluptas quia qui voluptatem consequatur numquam aliquam sunt totam recusandae id dignissimos aut sed asperiores deserunt" },
        { "userId": 3, "id": 25, "title": "rem alias distinctio quo quis", "body": "ullam consequatur ut omnis quis sit vel consequuntur ipsa eligendi ipsum molestiae et omnis error nostrum molestiae illo tempore quia et distinctio" },
        { "userId": 3, "id": 26, "title": "est et quae odit qui non", "body": "similique esse doloribus nihil accusamus omnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus perspiciatis cum ut laudantium omnis aut molestiae vel vero" },
        { "userId": 3, "id": 27, "title": "quasi id et eos tenetur aut quo autem", "body": "eum sed dolores ipsam sint possimus debitis occaecati debitis qui qui et ut placeat enim earum aut odit facilis consequatur suscipit necessitatibus rerum sed inventore temporibus consequatur" },
        { "userId": 3, "id": 28, "title": "delectus ullam et corporis nulla voluptas sequi", "body": "non et quaerat ex quae ad maiores maiores recusandae totam aut blanditiis mollitia quas illo ut voluptatibus voluptatem similique nostrum eum" },
        { "userId": 3, "id": 29, "title": "iusto eius quod necessitatibus culpa ea", "body": "odit magnam ut saepe sed non qui tempora atque nihil accusamus illum doloribus illo dolor eligendi repudiandae odit magni similique sed cum maiores" },
        { "userId": 3, "id": 30, "title": "a quo magni similique perferendis", "body": "alias dolor cumque impedit blanditiis non eveniet odio maxime blanditiis amet eius quis tempora quia autem rem a provident perspiciatis quia" },
        { "userId": 4, "id": 31, "title": "ullam ut quidem id aut vel consequuntur", "body": "debitis eius sed quibusdam non quis consectetur vitae impedit ut qui consequatur sed aut in quidem sit nostrum et maiores adipisci atque quaerat voluptatem adipisci repudiandae" },
        { "userId": 4, "id": 32, "title": "doloremque illum aliquid sunt", "body": "deserunt eos nobis asperiores et hic est debitis repellat molestiae optio nihil ratione ut eos beatae quibusdam distinctio maiores earum voluptates et aut adipisci ea maiores voluptas maxime" },
        { "userId": 4, "id": 33, "title": "qui explicabo molestiae dolorem", "body": "rerum ut et numquam laborum odit est sit id qui sint in quasi tenetur tempore aperiam et quaerat qui in rerum officiis sequi cumque quod" },
        { "userId": 4, "id": 34, "title": "magnam ut rerum iure", "body": "ea velit perferendis earum ut voluptatem voluptate itaque iusto totam pariatur in nemo voluptatem voluptatem autem magni tempora minima in est distinctio qui assumenda accusamus dignissimos officia nesciunt nobis" },
        { "userId": 4, "id": 35, "title": "id nihil consequatur molestias animi provident", "body": "nisi error delectus possimus ut eligendi vitae placeat eos harum cupiditate facilis reprehenderit voluptatem beatae modi ducimus quo illum voluptas eligendi et nobis quia fugit" },
        { "userId": 4, "id": 36, "title": "fuga nam accusamus voluptas reiciendis itaque", "body": "ad mollitia et omnis minus architecto odit voluptas doloremque maxime aut non ipsa qui alias veniam blanditiis culpa aut quia nihil cumque facere et occaecati qui aspernatur quia eaque ut aperiam inventore" },
        { "userId": 4, "id": 37, "title": "provident vel ut sit ratione est", "body": "debitis et eaque non officia sed nesciunt pariatur vel voluptatem iste vero et ea numquam aut expedita ipsum nulla in voluptates omnis consequatur aut enim officiis in quam qui" },
        { "userId": 4, "id": 38, "title": "explicabo et eos deleniti nostrum ab id repellendus", "body": "animi esse sit aut sit nesciunt assumenda eum voluptas quia voluptatibus provident quia necessitatibus ea rerum repudiandae quia voluptatem delectus fugit aut id quia ratione optio eos iusto veniam iure" },
        { "userId": 4, "id": 39, "title": "eos dolorem iste accusantium est eaque quam", "body": "corporis rerum ducimus vel eum accusantium maxime aspernatur a porro possimus iste omnis est in deleniti asperiores fuga aut voluptas sapiente vel dolore minus voluptatem incidunt ex" },
        { "userId": 4, "id": 40, "title": "enim quo cumque", "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilis ipsum rem optio mollitia quas voluptatem eum voluptas qui unde omnis voluptatem iure quasi maxime voluptas nam" },
        { "userId": 5, "id": 41, "title": "non est facere", "body": "molestias id nostrum excepturi molestiae dolore omnis repellendus quaerat saepe consectetur iste quaerat tenetur asperiores accusamus ex ut nam quidem est ducimus sunt debitis saepe" },
        { "userId": 5, "id": 42, "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas", "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem odit reiciendis aliquam sunt sequi nulla dolorem non facere repellendus voluptates quia ratione harum vitae ut" },
        { "userId": 5, "id": 43, "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis", "body": "similique fugit est illum et dolorum harum et voluptate eaque quidem exercitationem quos nam commodi possimus cum odio nihil nulla dolorum exercitationem magnam ex et a et distinctio debitis" },
        { "userId": 5, "id": 44, "title": "optio dolor molestias sit", "body": "temporibus est consectetur dolore et libero debitis vel velit laboriosam quia ipsum quibusdam qui itaque fuga rem aut ea et iure quam sed maxime ut distinctio quae" },
        { "userId": 5, "id": 45, "title": "ut numquam possimus omnis eius suscipit laudantium iure", "body": "est natus reiciendis nihil possimus aut provident ex et dolor repellat pariatur est nobis rerum repellendus dolorem autem" },
        { "userId": 5, "id": 46, "title": "aut quo modi neque nostrum ducimus", "body": "voluptatem quisquam iste voluptatibus natus officiis facilis dolorem quis quas ipsam vel et voluptatum in aliquid" },
        { "userId": 5, "id": 47, "title": "quibusdam cumque rem aut deserunt", "body": "voluptatem assumenda ut qui ut cupiditate aut impedit veniam occaecati nemo illum voluptatem laudantium molestiae beatae rerum ea iure soluta nostrum eligendi et voluptate" },
        { "userId": 5, "id": 48, "title": "ut voluptatem illum ea doloribus itaque eos", "body": "voluptates quo voluptatem facilis iure occaecati vel assumenda rerum officia et illum perspiciatis ab deleniti laudantium repellat ad ut et autem reprehenderit" },
        { "userId": 5, "id": 49, "title": "laborum non sunt aut ut assumenda perspiciatis voluptas", "body": "inventore ab sint natus fugit id nulla sequi architecto nihil quaerat eos tenetur in in eum veritatis non quibusdam officiis aspernatur cumque aut commodi aut" },
        { "userId": 5, "id": 50, "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem", "body": "error suscipit maxime adipisci consequuntur recusandae voluptas eligendi et est et voluptates quia distinctio ab amet quaerat molestiae et vitae adipisci impedit sequi nesciunt quis consectetur" },
        { "userId": 6, "id": 51, "title": "soluta aliquam aperiam consequatur illo quis voluptas", "body": "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem" },
        { "userId": 6, "id": 52, "title": "qui enim et consequuntur quia animi quis voluptate quibusdam", "body": "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum" },
        { "userId": 6, "id": 53, "title": "ut quo aut ducimus alias", "body": "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique" },
        { "userId": 6, "id": 54, "title": "sit asperiores ipsam eveniet odio non quia", "body": "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia" },
        { "userId": 6, "id": 55, "title": "sit vel voluptatem et non libero", "body": "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit" },
        { "userId": 6, "id": 56, "title": "qui et at rerum necessitatibus", "body": "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi" },
        { "userId": 6, "id": 57, "title": "sed ab est est", "body": "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est" },
        { "userId": 6, "id": 58, "title": "voluptatum itaque dolores nisi et quasi", "body": "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam" },
        { "userId": 6, "id": 59, "title": "qui commodi dolor at maiores et quis id accusantium", "body": "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt" },
        { "userId": 6, "id": 60, "title": "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere", "body": "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis" },
        { "userId": 7, "id": 61, "title": "voluptatem doloribus consectetur est ut ducimus", "body": "ab nemo optio odio\ndolorem provident\nmagnam sint rem ipsum est\nconsequuntur fugit dignissimos tempore" },
        { "userId": 7, "id": 62, "title": "beatae enim quia vel", "body": "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio" },
        { "userId": 7, "id": 63, "title": "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit", "body": "enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis aspernatur accusantium\nvoluptas nisi repellendus nesciunt dolorem erat nihil" },
        { "userId": 7, "id": 64, "title": "et fugit quas eum in in aperiam quod", "body": "id velit blanditiis\neum ea voluptatem\nmolestiae sint est voluptatem modi\natque cumque aut aut nemo eum et est" },
        { "userId": 7, "id": 65, "title": "consequatur id enim sunt et et", "body": "voluptatibus ex esse\nsint explicabo est aliquid cumque odio\nexpedita quidem cumque explicabo\nomnis quia et distinctio" },
        { "userId": 7, "id": 66, "title": "repudiandae ea animi iusto", "body": "officia quas aut culpa eum\neos et est voluptatum voluptatem\nnobis tempora et accusantium\nmagnam sunt et animi" },
        { "userId": 7, "id": 67, "title": "aliquid eos sed fuga est maxime repellendus", "body": "reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusamus quo\nest molestiae distinctio\ntotam et nihil cupiditate" },
        { "userId": 7, "id": 68, "title": "odio quis facere architecto reiciendis optio", "body": "magnam molestiae perferendis quisquam\nqui cum reiciendis\nmolestiae voluptates possimus et nihil\net consequatur earum sapiente" },
        { "userId": 7, "id": 69, "title": "fugiat quod pariatur odit minima", "body": "officiis error culpa consequatur modi asperiores et\nquisquam ut et aliquid deleniti et quas\nexpedita et cum\noptio et et sunt quasi quam rerum" },
        { "userId": 7, "id": 70, "title": "voluptatem laborum magni", "body": "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquidem dolorem quos\ntempora quo necessitatibus" },
        { "userId": 8, "id": 71, "title": "et iusto veniam et illum aut fuga", "body": "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nquisquam tempora et tenetur ex architecto\nitaque aperiam non debitis possimus qui neque nisi nulla" },
        { "userId": 8, "id": 72, "title": "sint hic doloribus consequatur eos non id", "body": "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nrerum perferendis error" },
        { "userId": 8, "id": 73, "title": "consequuntur deleniti eos quia temporibus ab aliquid at", "body": "voluptatem cumque tenetur consequatur expedita ipsum nihil\nperspiciatis omnis eum nihil omnis\nest occaecati asperiores culpa molestiae mollitia quia et magnam dolor" },
        { "userId": 8, "id": 74, "title": "enim unde ratione doloribus quas enim ut sit sapiente", "body": "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora" },
        { "userId": 8, "id": 75, "title": "dignissimos eum dolor ut enim et delectus in", "body": "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem" },
        { "userId": 8, "id": 76, "title": "doloremque officiis ad et non perferendis", "body": "ut animi facere totam\niusto tempore dolorem aut est\naspernatur quia voluptatem hic voluptas dolor doloremque\ntempora quibusdam facilis optio debitis odit" },
        { "userId": 8, "id": 77, "title": "necessitatibus quasi exercitationem odio", "body": "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur harum est omnis ex qui\nreprehenderit ut voluptatem nostrum enim explicabo\ndoloremque ut eos explicabo voluptas est" },
        { "userId": 8, "id": 78, "title": "quam voluptatibus rerum veritatis", "body": "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus" },
        { "userId": 8, "id": 79, "title": "pariatur consequatur quia magnam autem omnis non amet", "body": "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nrerum et sed magnam\nvoluptatem qui occaecati" },
        { "userId": 8, "id": 80, "title": "labore in ex et explicabo corporis aut quas", "body": "ex quod dolorem ea eum iure qui provident amet\niusto doloremque\nillum fugit eligendi\net nobis quia fugit" },
        { "userId": 9, "id": 81, "title": "tempora rem veritatis voluptas quo dolores vero", "body": "facere qui nesciunt est voluptatum voluptatem nisi sequi\net quam aut est\nminus et voluptate est\noccaecati harum doloremque" },
        { "userId": 9, "id": 82, "title": "laudantium voluptate suscipit sunt enim enim", "body": "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate sunt\nvitae illum temporibus quia et distinctio" },
        { "userId": 9, "id": 83, "title": "odit et voluptates doloribus alias odio et", "body": "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreiciendis facere voluptate rem officia doloribus ut" },
        { "userId": 9, "id": 84, "title": "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut", "body": "sint molestiae consequatur est\nmagni qui consectetur\net quis dolores aut saepe\nquidem repellat excepturi ut quia" },
        { "userId": 9, "id": 85, "title": "dolore veritatis porro provident adipisci blanditiis et sunt", "body": "similique sed nisi voluptas iusto omnis\nmolestiae doloremque maiores\nnam autem et accusantium\nquia labore sunt eligendi" },
        { "userId": 9, "id": 86, "title": "placeat quia et porro iste", "body": "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut voluptatibus voluptatem\noccaecati et sint libero et\nomnis facere occaecati non" },
        { "userId": 9, "id": 87, "title": "nostrum quis quasi placeat", "body": "eos et molestiae\nnesciunt ut a\nsit laboriosam voluptatem aut non\net necessitatibus autem facere molestiae" },
        { "userId": 9, "id": 88, "title": "sapiente omnis fugit eos", "body": "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed" },
        { "userId": 9, "id": 89, "title": "sint soluta et vel magnam aut ut sed qui", "body": "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est" },
        { "userId": 9, "id": 90, "title": "ad iusto omnis odit dolor voluptatibus", "body": "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\nvelit ut quia optio\nodio harum voluptatem et culpa" },
        { "userId": 10, "id": 91, "title": "aut amet sed", "body": "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur cumque voluptatibus inventore nam" },
        { "userId": 10, "id": 92, "title": "ratione ex tenetur perferendis", "body": "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\naut molestiae tempora nihil eum\nalias cupiditate consectetur culpa" },
        { "userId": 10, "id": 93, "title": "beatae soluta recusandae", "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla" },
        { "userId": 10, "id": 94, "title": "qui qui voluptates illo iste minima", "body": "aspernatur expedita soluta quo ab ut similique\nenim voluptatem iure doloribus occaecati\nnon eligendi nihil sunt sed repellendus\ntenetur doloremque occaecati non minima eveniet qui voluptatibus" },
        { "userId": 10, "id": 95, "title": "id minus libero illum nam ad officiis", "body": "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus\nreiciendis et dolorem autem" },
        { "userId": 10, "id": 96, "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi", "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et inventore itaque rerum\nveniam non exercitationem delectus aut" },
        { "userId": 10, "id": 97, "title": "quas fugiat ut perspiciatis vero provident", "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at" },
        { "userId": 10, "id": 98, "title": "laboriosam dolor voluptates", "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi" },
        { "userId": 10, "id": 99, "title": "temporibus sit alias delectus eligendi possimus magni", "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia" },
        { "userId": 10, "id": 100, "title": "at nam consequatur ea labore ea harum", "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut" }
        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered border-secondary caption-top">
                            <caption>Post Details</caption>
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">UserId</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Body</th>
                                </tr>
                            </thead>
                            <tbody>
                               {postData.map(
                                (value,index)=>{
                                    return(
                                        <tr>
                                                <td>{value.userId}</td>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                                <td>{value.body}</td>
                                            </tr>
                                    )
                                }
                               )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllPost