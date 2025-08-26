export class Prayer {
    constructor(data = {}) {
        this.id = data.id || Math.random().toString(36).substr(2, 9);
        this.name = data.name || '';
        this.content = data.content || '';
        this.contentLatin = data.contentLatin || '';
        this.category = data.category || 'tradicional';
        this.audio_url = data.audio_url || '';
        this.createdAt = data.createdAt || new Date();
    }

    static async list() {
        // Orações do Opus Dei e outras tradicionais
        return [
            new Prayer({
                id: '1',
                name: 'Pai Nosso',
                content: 'Pai Nosso que estais nos Céus, santificado seja o vosso Nome, venha a nós o vosso Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.',
                contentLatin: 'Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. Panem nostrum quotidianum da nobis hodie. Et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Amen.',
                category: 'tradicional'
            }),
            new Prayer({
                id: '2',
                name: 'Ave Maria',
                content: 'Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.',
                contentLatin: 'Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.',
                category: 'tradicional'
            }),
            new Prayer({
                id: '3',
                name: 'Glória ao Pai',
                content: 'Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.',
                contentLatin: 'Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen.',
                category: 'tradicional'
            }),
            new Prayer({
                id: '4',
                name: 'Credo',
                content: 'Creio em um só Deus, Pai onipotente, criador do céu e da terra, de todas as coisas visíveis e invisíveis. E em um Senhor, Jesus Cristo, filho unigênito de Deus, e nascido do Pai antes de todos os séculos. Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro, gerado, não criado, consubstancial ao Pai, por quem tudo foi feito. O qual, por causa de nós homens e por causa da nossa salvação, desceu dos céus e se incarnou pelo Espírito Santo, de Maria Virgem e se fez homem. Também por nós foi crucificado, sob de Pôncio Pilatos, padeceu e foi sepultado. Ressuscitou ao terceiro dia segundo as escrituras e subiu ao céu, onde está sentado à direita do Pai. E de novo há de vir em sua glória julgar os vivos e mortos, cujo reino não terá fim. Creio no Espírito Santo, Senhor que dá a vida e que procede do Pai e do Filho. Que com o Pai e o Filho é adorado e glorificado, ele que falou pelos profetas. Creio na Igreja, una, santa, católica e apostólica. Professo um só batismo para remissão dos pecados. E espero a ressurreição dos mortos e a vida do mundo que há de vir. Amém.',
                contentLatin: 'Credo in unum Deum, Patrem omnipotentem, factorem caeli et terrae, visibilium omnium et invisibilium. Et in unum Dominum Iesum Christum, Filium Dei unigenitum, et ex Patre natum ante omnia saecula. Deum de Deo, lumen de lumine, Deum verum de Deo vero, genitum, non factum, consubstantialem Patri, per quem omnia facta sunt. Qui propter nos homines et propter nostram salutem descendit de caelis. Et incarnatus est de Spiritu Sancto ex Maria Virgine, et homo factus est. Crucifixus etiam pro nobis sub Pontio Pilato, passus et sepultus est. Et resurrexit tertia die secundum Scripturas, et ascendit in caelum, sedet ad dexteram Patris. Et iterum venturus est cum gloria, iudicare vivos et mortuos, cuius regni non erit finis. Et in Spiritum Sanctum, Dominus et vivificantem, qui ex Patre Filioque procedit. Qui cum Patre et Filio simul adoratur et conglorificatur, qui locutus est per prophetas. Et unam, sanctam, catholicam et apostolicam Ecclesiam. Confiteor unum baptisma in remissionem peccatorum. Et expecto resurrectionem mortuorum, et vitam venturi saeculi. Amen.',
                category: 'tradicional'
            }),
            new Prayer({
                id: '5',
                name: 'Salve Rainha',
                content: 'Salve, Rainha, mãe de misericórdia, vida, doçura e esperança nossa, salve. A vós clamamos, os degradados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, estes vossos misericordiosos olhos a nós volvei. E, depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó sempre Virgem Maria. Amém. Rogai por nós Santa Mãe de Deus. Para que sejamos dignos das promessas de Cristo.',
                contentLatin: 'Salve, Regina, Mater misericordiae, vita, dulcedo et spes nostra, salve. Ad te clamamus, exsules filii Evae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, o pia, o dulcis Virgo Maria. Amen. Ora pro nobis, Sancta Dei Genitrix. Ut digni efficiamur promissionibus Christi.',
                category: 'tradicional'
            }),
            new Prayer({
                id: '6',
                name: 'Oração de São Josemaria',
                content: 'Ó Jesus, meu Senhor e meu Deus, que por amor a mim te fizeste homem, e por amor a mim morreste na Cruz, e por amor a mim te fizeste presente no Santíssimo Sacramento do altar, eu te amo com todo o meu coração, com toda a minha alma e com todas as minhas forças. Eu te adoro, eu te louvo, eu te bendigo, eu te glorifico, eu te dou graças, eu te peço perdão pelos meus pecados, eu te peço que me ajudes a ser santo, eu te peço que me ajudes a fazer a tua vontade, eu te peço que me ajudes a amar-te cada vez mais. Amém.',
                contentLatin: 'O Iesu, Domine mi et Deus meus, qui propter me homo factus es, et propter me in Cruce mortuus es, et propter me in Sanctissimo Sacramento altaris praesens factus es, ego te amo toto corde meo, tota anima mea et omnibus viribus meis. Ego te adoro, ego te laudo, ego te benedico, ego te glorifico, ego tibi gratias ago, ego tibi peccatorum meorum veniam peto, ego te rogo ut me sanctum facias, ego te rogo ut me facias voluntatem tuam facere, ego te rogo ut me facias te magis magisque amare. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '7',
                name: 'Oração pela Santificação do Trabalho',
                content: 'Senhor, coloquei o meu trabalho nas tuas mãos. Abençoa-o e santifica-o. Que seja para mim um meio de santificação e de apostolado. Que eu o realize com perfeição humana e com reta intenção, por amor a ti e para servir aos outros. Que eu seja exemplo de profissional cristão e que, através do meu trabalho, eu possa ajudar a santificar o mundo. Amém.',
                contentLatin: 'Domine, opus meum in manibus tuis posui. Benedic illud et sanctifica illud. Sit mihi medium sanctificationis et apostolatus. Faciam illud cum perfectione humana et recta intentione, propter amorem tuum et ad serviendum aliis. Sim exemplar professionalis christiani et ut, per opus meum, possim adiuvare ad sanctificandum mundum. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '8',
                name: 'Oração pela Família',
                content: 'Senhor Jesus, que fostes criado na Sagrada Família de Nazaré, abençoai as nossas famílias. Que elas sejam santuários de amor, de paz e de alegria. Que os pais sejam exemplos de fé e de virtude para os filhos. Que os filhos honrem e respeitem os pais. Que todos vivam unidos no amor de Deus e no amor uns dos outros. Que as nossas famílias sejam verdadeiras igrejas domésticas, onde se reza, se ama e se serve a Deus. Amém.',
                contentLatin: 'Domine Iesu, qui in Sacra Familia Nazarethana educatus es, benedic familias nostras. Sint sanctuaria amoris, pacis et gaudii. Parentes sint exempla fidei et virtutis pro filiis. Filii honorent et reverentur parentes. Omnes vivant uniti in amore Dei et in amore invicem. Familiae nostrae sint verae ecclesiae domesticae, ubi oratur, amatur et servitur Deo. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '9',
                name: 'Oração pelos Doentes',
                content: 'Senhor Jesus, médico das almas e dos corpos, que curastes os enfermos durante a vossa vida terrena, olhai com misericórdia para todos os que sofrem. Confortai-os na sua dor, fortalecei-os na sua fraqueza, dai-lhes a graça de aceitar a cruz com paciência e resignação. Que a sua doença seja para eles um meio de santificação e que, unindo os seus sofrimentos aos vossos, possam participar na vossa redenção. Amém.',
                contentLatin: 'Domine Iesu, medicus animarum et corporum, qui infirmos curabatis in vita vestra terrestri, respicite cum misericordia omnes qui patiuntur. Confortate eos in dolore suo, roborate eos in infirmitate sua, date illis gratiam accipiendi crucem cum patientia et resignatione. Infirmitas eorum sit medium sanctificationis et, uniendo passiones suas vestris, possint participare in redemptione vestra. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '10',
                name: 'Oração pelos Defuntos',
                content: 'Senhor Jesus, que morreste e ressuscitaste para dar a vida eterna a todos os que crêem em vós, olhai com misericórdia para as almas dos fiéis defuntos. Que elas descansem em paz na vossa presença. Que a vossa misericórdia as purifique de todos os seus pecados e as conduza à glória da ressurreição. Que nós, que ainda peregrinamos nesta terra, possamos um dia reunir-nos convosco no céu, para viver eternamente na vossa companhia. Amém.',
                contentLatin: 'Domine Iesu, qui mortuus es et resurrexisti ut vitam aeternam dares omnibus qui in te credunt, respicite cum misericordia animas fidelium defunctorum. Requiescant in pace in praesentia vestra. Misericordia vestra purget eas ab omnibus peccatis suis et ducat eas ad gloriam resurrectionis. Nos, qui adhuc peregrinamur in hac terra, possimus aliquando congregari vobiscum in caelo, ut vivamus aeternaliter in societate vestra. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '11',
                name: 'Oração pela Igreja',
                content: 'Senhor Jesus, que fundastes a vossa Igreja sobre Pedro e os Apóstolos, olhai com amor para a vossa Esposa. Que ela seja sempre fiel à vossa doutrina e ao vosso exemplo. Que os pastores sejam santos e zelosos no cuidado das almas. Que os fiéis sejam fervorosos na fé e no amor. Que a Igreja seja um farol de luz e de esperança para o mundo inteiro. Que ela cresça sempre em santidade e em número, até que todos os homens conheçam a vossa verdade e sigam o vosso caminho. Amém.',
                contentLatin: 'Domine Iesu, qui fundastis Ecclesiam vestram super Petrum et Apostolos, respicite cum amore ad Sponsam vestram. Sit semper fidelis doctrinae vestrae et exemplo vestro. Pastores sint sancti et zelosi in cura animarum. Fideles sint ferventes in fide et amore. Ecclesia sit pharus lucis et spei pro toto mundo. Crescat semper in sanctitate et numero, donec omnes homines cognoscant veritatem vestram et sequantur viam vestram. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '12',
                name: 'Oração pela Paz',
                content: 'Senhor Jesus, Príncipe da Paz, que dissestes aos vossos discípulos: "Deixo-vos a paz, dou-vos a minha paz", olhai com misericórdia para o nosso mundo conturbado. Que a vossa paz reine nos corações de todos os homens. Que os governantes trabalhem pela justiça e pela concórdia entre os povos. Que os conflitos sejam resolvidos pelo diálogo e pela compreensão mútua. Que a paz seja fruto da justiça e do amor. Que todos os homens se reconheçam como irmãos, filhos do mesmo Pai celestial. Amém.',
                contentLatin: 'Domine Iesu, Princeps Pacis, qui dixistis discipulis vestris: "Pacem relinquo vobis, pacem meam do vobis", respicite cum misericordia ad mundum nostrum turbatum. Pax vestra regnet in cordibus omnium hominum. Rectores laborant pro iustitia et concordia inter populos. Conflictus resolvantur per dialogum et mutuam comprehensionem. Pax sit fructus iustitiae et amoris. Omnes homines se recognoscant ut fratres, filios eiusdem Patris caelestis. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '13',
                name: 'Oração de Ação de Graças',
                content: 'Senhor Deus, Pai de toda a bondade, eu vos dou graças por todos os benefícios que me haveis concedido. Por me terdes criado e redimido, por me terdes chamado à fé e à vida da graça, por me terdes dado uma família e amigos, por me terdes protegido nos perigos e me terdes consolado nas tribulações. Por tudo o que sou e tenho, por tudo o que faço e sofro, eu vos dou graças. Que o meu coração seja sempre agradecido e que eu use de todos os vossos dons para vos glorificar e para servir ao próximo. Amém.',
                contentLatin: 'Domine Deus, Pater omnis bonitatis, ego tibi gratias ago pro omnibus beneficiis quae mihi concessisti. Quia me creasti et redemisti, quia me vocasti ad fidem et vitam gratiae, quia mihi dedisti familiam et amicos, quia me protexisti in periculis et consolatus es in tribulationibus. Pro omnibus quae sum et habeo, pro omnibus quae facio et patior, ego tibi gratias ago. Cor meum sit semper gratus et utar omnibus donis tuis ad glorificandum te et serviendum proximo. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '14',
                name: 'Oração de Contrição',
                content: 'Senhor Jesus, que morreste na cruz para perdoar os meus pecados, eu me arrependo de todo o coração de ter-vos ofendido. Peço-vos perdão por todas as minhas faltas, por todas as minhas negligências, por todos os meus pecados de pensamento, palavra, obra e omissão. Que a vossa misericórdia me purifique e me faça digno de vos receber na Sagrada Comunhão. Que eu possa viver sempre na vossa graça e nunca mais vos ofenda. Amém.',
                contentLatin: 'Domine Iesu, qui mortuus es in cruce ut dimitteres peccata mea, ego me paenitet toto corde quia te offendissem. Peto veniam pro omnibus culpis meis, pro omnibus negligentis meis, pro omnibus peccatis meis cogitationis, verbi, operis et omissionis. Misericordia vestra me purget et me faciat dignum accipiendi vos in Sancta Communione. Possim semper vivere in gratia vestra et numquam vos offendam. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '15',
                name: 'Oração pela Vocação',
                content: 'Senhor Jesus, que chamastes os Apóstolos para vos seguirem e para serem pescadores de homens, olhai com amor para todos os jovens que procuram a vossa vontade. Que eles descubram o plano que tendes para as suas vidas. Que sejam generosos na resposta ao vosso chamamento. Que muitos sigam o caminho do sacerdócio, da vida religiosa ou do apostolado leigo. Que a vossa Igreja tenha sempre pastores santos e zelosos, e que todos os fiéis sejam apóstolos no meio do mundo. Amém.',
                contentLatin: 'Domine Iesu, qui vocastis Apostolos ut vos sequerentur et essent piscatores hominum, respicite cum amore ad omnes iuvenes qui quaerunt voluntatem vestram. Inveniant consilium quod habetis pro vitis eorum. Sint generosi in respondendo ad vocationem vestram. Multi sequantur viam sacerdotii, vitae religiosae vel apostolatus laici. Ecclesia vestra habeat semper pastores sanctos et zelosos, et omnes fideles sint apostoli in medio mundi. Amen.',
                category: 'devocional'
            }),
            // Mais orações tradicionais
            new Prayer({
                id: '16',
                name: 'Sinal da Cruz',
                content: 'Pelo sinal da Santa Cruz, livrai-nos, Deus nosso Senhor, de nossos inimigos. Em nome do Pai e do Filho e do Espírito Santo. Amém.',
                contentLatin: 'Per signum crucis, de inimicis nostris libera nos, Deus noster. In nomine Patris et Filii et Spiritus Sancti. Amen.',
                category: 'tradicional'
            }),
            new Prayer({
                id: '17',
                name: 'Oração de Fátima',
                content: 'Ó meu bom Jesus, perdoai as nossas dívidas, livrai-nos do fogo do inferno, conduzi aos céus todas as almas, e socorrei principalmente as que mais precisarem de tua misericórdia.',
                contentLatin: 'O pie Iesu, dimitte nobis debita nostra, libera nos ab igne inferni, perduc in caelum omnes animas, praesertim eas quae misericordiae tuae maxime indigent.',
                category: 'tradicional'
            }),
            new Prayer({
                id: '18',
                name: 'Magnificat',
                content: 'A minha alma engrandece ao Senhor e se alegrou o meu espírito em Deus, meu Salvador, pois ele viu a pequenez de sua serva, desde agora as gerações hão de chamar-me de bendita. O Poderoso fez por mim maravilhas e Santo é o seu nome! Seu amor, de geração em geração, se estende sobre aqueles que o respeitam. Amém.',
                contentLatin: 'Magnificat anima mea Dominum, et exsultavit spiritus meus in Deo salutari meo. Quia respexit humilitatem ancillae suae; ecce enim ex hoc beatam me dicent omnes generationes. Quia fecit mihi magna qui potens est, et sanctum nomen eius. Et misericordia eius a progenie in progenies timentibus eum. Amen.',
                category: 'tradicional'
            }),
            new Prayer({
                id: '19',
                name: 'Anjo de Deus',
                content: 'Anjo de Deus, meu guardião querido, a quem o amor divino me confiou, iluminai-me, guardai-me, governai-me e guiai-me. Amém.',
                contentLatin: 'Angele Dei, qui custos es mei, me tibi commissum pietate superna, illumina, custodi, rege et guberna. Amen.',
                category: 'tradicional'
            }),
            new Prayer({
                id: '20',
                name: 'Ato de Fé',
                content: 'Ó meu Deus, eu creio firmemente que vós sois um só Deus em três pessoas distintas, Pai, Filho e Espírito Santo. Creio que vossa divina Filho se fez homem e morreu por nossos pecados, e que há de vir a julgar os vivos e os mortos. Creio estas e todas as verdades que a Santa Igreja Católica ensina, porque vós as revelastes, que sois a verdade infalível e não podeis enganar nem ser enganado. Amém.',
                contentLatin: 'O Deus meus, ego firmiter credo te esse unum Deum in tribus personis distinctis, Patre, Filio et Spiritu Sancto. Credo Filium tuum divinum factum hominem et mortuum pro peccatis nostris, et venturum iudicare vivos et mortuos. Credo has et omnes veritates quas Sancta Ecclesia Catholica docet, quia tu eas revelasti, qui es veritas infallibilis et non potes falli nec fallere. Amen.',
                category: 'tradicional'
            }),
            // Orações diárias
            new Prayer({
                id: '21',
                name: 'Oração da Manhã',
                content: 'Senhor, eu vos ofereço este dia, com todas as suas alegrias e tristezas, trabalhos e descansos, orações e distrações. Que tudo seja para vossa glória e para a salvação das almas. Abençoai-me e protegei-me, para que eu possa cumprir fielmente a vossa vontade. Amém.',
                contentLatin: 'Domine, ego tibi offero hunc diem, cum omnibus gaudiis et tristitiis, laboribus et requietionibus, orationibus et distractionibus suis. Omnia sint ad gloriam tuam et ad salutem animarum. Benedic me et protege me, ut possim fideliter voluntatem tuam implere. Amen.',
                category: 'oracao_diaria'
            }),
            new Prayer({
                id: '22',
                name: 'Oração da Noite',
                content: 'Senhor, eu vos agradeço por este dia que me destes. Perdoai-me pelos pecados que cometi e pelas boas obras que deixei de fazer. Que o meu sono seja tranquilo e que eu acorde amanhã com renovado vigor para vos servir. Abençoai-me e a todos os meus entes queridos. Amém.',
                contentLatin: 'Domine, ego tibi gratias ago pro hoc die quem mihi dedisti. Dimitte mihi peccata quae commisi et bona opera quae facere omisi. Somnus meus sit tranquillus et cras evigilem cum renovato vigore ad serviendum tibi. Benedic me et omnes caros meos. Amen.',
                category: 'oracao_diaria'
            }),
            new Prayer({
                id: '23',
                name: 'Oração antes das Refeições',
                content: 'Senhor, abençoai-nos e abençoai o alimento que vamos receber. Que ele nos fortaleça para vos servir e amar ao próximo. Agradecemos por este dom da vossa providência. Amém.',
                contentLatin: 'Domine, benedic nos et benedic cibum quem sumpturi sumus. Fortificet nos ad serviendum tibi et amandum proximum. Gratias tibi agimus pro hoc dono providentiae tuae. Amen.',
                category: 'oracao_diaria'
            }),
            new Prayer({
                id: '24',
                name: 'Oração depois das Refeições',
                content: 'Senhor, agradecemos por este alimento que nos destes. Que ele nos ajude a crescer em santidade e a servir-vos com mais fervor. Abençoai todos os que trabalharam para que tivéssemos esta refeição. Amém.',
                contentLatin: 'Domine, gratias tibi agimus pro hoc cibo quem nobis dedisti. Adiuvet nos ad crescendum in sanctitate et ad serviendum tibi cum maiore fervore. Benedic omnes qui laboraverunt ut hanc refectionem haberemus. Amen.',
                category: 'oracao_diaria'
            }),
            new Prayer({
                id: '25',
                name: 'Oração pelo Trabalho',
                content: 'Senhor, abençoai o meu trabalho de hoje. Que eu o realize com perfeição e amor, oferecendo-o a vós. Que através do meu esforço eu possa santificar-me e ajudar aos outros. Amém.',
                contentLatin: 'Domine, benedic opus meum hodiernum. Faciam illud cum perfectione et amore, offerendo illud tibi. Per laborem meum possim sanctificari et aliis adiuvare. Amen.',
                category: 'oracao_diaria'
            }),
            // Orações do Rosário
            new Prayer({
                id: '26',
                name: 'Oração do Rosário',
                content: 'Ó Maria, Mãe de Deus e nossa Mãe, ensinai-nos a rezar o Rosário como vós o rezastes, meditando em cada mistério da vida de Jesus. Que este exercício de piedade nos conduza à santidade e nos una mais intimamente convosco e com vosso Filho. Amém.',
                contentLatin: 'O Maria, Mater Dei et Mater nostra, doce nos orare Rosarium sicut tu orasti, meditando in unoquoque mysterio vitae Iesu. Hoc pietatis exercitium nos ducat ad sanctitatem et nos uni intimius tecum et cum Filio tuo. Amen.',
                category: 'rosario'
            }),
            new Prayer({
                id: '27',
                name: 'Oração pelos Vivos',
                content: 'Senhor Jesus, que morreste por todos os homens, olhai com misericórdia para todos os vivos. Que eles conheçam a vossa verdade e sigam o vosso caminho. Que os que estão em pecado se convertam, que os que estão em graça perseverem, que todos alcancem a vida eterna. Amém.',
                contentLatin: 'Domine Iesu, qui mortuus es pro omnibus hominibus, respicite cum misericordia ad omnes viventes. Cognoscant veritatem tuam et sequantur viam tuam. Qui in peccato sunt convertantur, qui in gratia sunt perseverent, omnes vitam aeternam consequantur. Amen.',
                category: 'rosario'
            }),
            new Prayer({
                id: '28',
                name: 'Oração pelos Mortos',
                content: 'Senhor Jesus, que ressuscitastes dos mortos, olhai com misericórdia para as almas dos fiéis defuntos. Que elas descansem em paz na vossa presença. Que a vossa misericórdia as purifique e as conduza à glória da ressurreição. Amém.',
                contentLatin: 'Domine Iesu, qui resurrexisti a mortuis, respicite cum misericordia ad animas fidelium defunctorum. Requiescant in pace in praesentia tua. Misericordia tua purget eas et ducat eas ad gloriam resurrectionis. Amen.',
                category: 'rosario'
            }),
            // Novenas
            new Prayer({
                id: '29',
                name: 'Noveno do Espírito Santo',
                content: 'Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o vosso Espírito e tudo será criado e renovareis a face da terra. Amém.',
                contentLatin: 'Veni, Sancte Spiritus, reple tuorum corda fidelium, et tui amoris in eis ignem accende. Emitte Spiritum tuum et creabuntur, et renovabis faciem terrae. Amen.',
                category: 'novena'
            }),
            new Prayer({
                id: '30',
                name: 'Noveno a Nossa Senhora',
                content: 'Ó Maria, concebida sem pecado, rogai por nós que recorremos a vós. Que vossa intercessão nos obtenha a graça de viver sempre na amizade de Deus e de alcançar a vida eterna. Amém.',
                contentLatin: 'O Maria, sine labe concepta, ora pro nobis qui ad te confugimus. Intercessio tua nobis obtineat gratiam semper vivendi in amicitia Dei et consequendi vitam aeternam. Amen.',
                category: 'novena'
            }),
            new Prayer({
                id: '31',
                name: 'Noveno a São José',
                content: 'Ó glorioso São José, pai adotivo de Jesus e esposo casto de Maria, rogai por nós. Que vossa intercessão nos ajude a viver com a mesma pureza e santidade que caracterizaram vossa vida. Amém.',
                contentLatin: 'O gloriosi Ioseph, pater adoptivus Iesu et sponsus castus Mariae, ora pro nobis. Intercessio tua nos adiuvet vivere cum eadem puritate et sanctitate quae vitam tuam caracterizavit. Amen.',
                category: 'novena'
            }),
            // Ladainhas
            new Prayer({
                id: '32',
                name: 'Ladainha de Nossa Senhora',
                content: 'Senhor, tende piedade de nós. Cristo, tende piedade de nós. Senhor, tende piedade de nós. Cristo, ouvi-nos. Cristo, atendei-nos. Deus Pai do céu, tende piedade de nós. Deus Filho, Redentor do mundo, tende piedade de nós. Deus Espírito Santo, tende piedade de nós. Santa Maria, rogai por nós. Santa Mãe de Deus, rogai por nós. Santa Virgem das virgens, rogai por nós. Mãe de Cristo, rogai por nós. Mãe da divina graça, rogai por nós. Mãe puríssima, rogai por nós. Mãe castíssima, rogai por nós. Mãe sempre virgem, rogai por nós. Mãe imaculada, rogai por nós. Mãe digna de amor, rogai por nós. Mãe admirável, rogai por nós. Mãe do bom conselho, rogai por nós. Mãe do Criador, rogai por nós. Mãe do Salvador, rogai por nós. Virgem prudentíssima, rogai por nós. Virgem venerável, rogai por nós. Virgem louvável, rogai por nós. Virgem poderosa, rogai por nós. Virgem clemente, rogai por nós. Virgem fiel, rogai por nós. Espelho de justiça, rogai por nós. Sede da sabedoria, rogai por nós. Causa da nossa alegria, rogai por nós. Vaso espiritual, rogai por nós. Vaso honorífico, rogai por nós. Vaso insigne de devoção, rogai por nós. Rosa mística, rogai por nós. Torre de David, rogai por nós. Torre de marfim, rogai por nós. Casa de ouro, rogai por nós. Arca da aliança, rogai por nós. Porta do céu, rogai por nós. Estrela da manhã, rogai por nós. Saúde dos enfermos, rogai por nós. Refúgio dos pecadores, rogai por nós. Consoladora dos aflitos, rogai por nós. Auxílio dos cristãos, rogai por nós. Rainha dos Anjos, rogai por nós. Rainha dos Patriarcas, rogai por nós. Rainha dos Profetas, rogai por nós. Rainha dos Apóstolos, rogai por nós. Rainha dos Mártires, rogai por nós. Rainha dos Confessores, rogai por nós. Rainha das Virgens, rogai por nós. Rainha de todos os Santos, rogai por nós. Rainha concebida sem pecado original, rogai por nós. Rainha elevada ao céu, rogai por nós. Rainha do Santo Rosário, rogai por nós. Rainha da paz, rogai por nós. Cordeiro de Deus, que tirais o pecado do mundo, perdoai-nos, Senhor. Cordeiro de Deus, que tirais o pecado do mundo, ouvi-nos, Senhor. Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós. Rogai por nós, Santa Mãe de Deus. Para que sejamos dignos das promessas de Cristo. Amém.',
                contentLatin: 'Kyrie, eleison. Christe, eleison. Kyrie, eleison. Christe, audi nos. Christe, exaudi nos. Deus Pater de caelis, miserere nobis. Deus Filius, Redemptor mundi, miserere nobis. Deus Spiritus Sanctus, miserere nobis. Sancta Maria, ora pro nobis. Sancta Dei Genitrix, ora pro nobis. Sancta Virgo virginum, ora pro nobis. Mater Christi, ora pro nobis. Mater divinae gratiae, ora pro nobis. Mater purissima, ora pro nobis. Mater castissima, ora pro nobis. Mater inviolata, ora pro nobis. Mater intemerata, ora pro nobis. Mater amabilis, ora pro nobis. Mater admirabilis, ora pro nobis. Mater boni consilii, ora pro nobis. Mater Creatoris, ora pro nobis. Mater Salvatoris, ora pro nobis. Virgo prudentissima, ora pro nobis. Virgo veneranda, ora pro nobis. Virgo praedicanda, ora pro nobis. Virgo potens, ora pro nobis. Virgo clemens, ora pro nobis. Virgo fidelis, ora pro nobis. Speculum iustitiae, ora pro nobis. Sedes sapientiae, ora pro nobis. Causa nostrae laetitiae, ora pro nobis. Vas spirituale, ora pro nobis. Vas honorabile, ora pro nobis. Vas insigne devotionis, ora pro nobis. Rosa mystica, ora pro nobis. Turris Davidica, ora pro nobis. Turris eburnea, ora pro nobis. Domus aurea, ora pro nobis. Foederis arca, ora pro nobis. Ianua caeli, ora pro nobis. Stella matutina, ora pro nobis. Salus infirmorum, ora pro nobis. Refugium peccatorum, ora pro nobis. Consolatrix afflictorum, ora pro nobis. Auxilium christianorum, ora pro nobis. Regina Angelorum, ora pro nobis. Regina Patriarcharum, ora pro nobis. Regina Prophetarum, ora pro nobis. Regina Apostolorum, ora pro nobis. Regina Martyrum, ora pro nobis. Regina Confessorum, ora pro nobis. Regina Virginum, ora pro nobis. Regina Sanctorum omnium, ora pro nobis. Regina sine labe originali concepta, ora pro nobis. Regina in caelum assumpta, ora pro nobis. Regina sacratissimi Rosarii, ora pro nobis. Regina pacis, ora pro nobis. Agnus Dei, qui tollis peccata mundi, parce nobis, Domine. Agnus Dei, qui tollis peccata mundi, exaudi nos, Domine. Agnus Dei, qui tollis peccata mundi, miserere nobis. Ora pro nobis, Sancta Dei Genitrix. Ut digni efficiamur promissionibus Christi. Amen.',
                category: 'ladainha'
            }),
            new Prayer({
                id: '33',
                name: 'Ladainha do Sagrado Coração',
                content: 'Senhor, tende piedade de nós. Cristo, tende piedade de nós. Senhor, tende piedade de nós. Cristo, ouvi-nos. Cristo, atendei-nos. Deus Pai do céu, tende piedade de nós. Deus Filho, Redentor do mundo, tende piedade de nós. Deus Espírito Santo, tende piedade de nós. Santíssima Trindade, um só Deus, tende piedade de nós. Coração de Jesus, Filho do Pai Eterno, tende piedade de nós. Coração de Jesus, formado pelo Espírito Santo no seio da Virgem Mãe, tende piedade de nós. Coração de Jesus, unido substancialmente ao Verbo de Deus, tende piedade de nós. Coração de Jesus, de majestade infinita, tende piedade de nós. Coração de Jesus, templo santo de Deus, tende piedade de nós. Coração de Jesus, tabernáculo do Altíssimo, tende piedade de nós. Coração de Jesus, casa de Deus e porta do céu, tende piedade de nós. Coração de Jesus, fornalha ardente de caridade, tende piedade de nós. Coração de Jesus, receptáculo de justiça e amor, tende piedade de nós. Coração de Jesus, cheio de bondade e amor, tende piedade de nós. Coração de Jesus, abismo de todas as virtudes, tende piedade de nós. Coração de Jesus, digníssimo de todos os louvores, tende piedade de nós. Coração de Jesus, rei e centro de todos os corações, tende piedade de nós. Coração de Jesus, no qual estão todos os tesouros da sabedoria e ciência, tende piedade de nós. Coração de Jesus, no qual habita toda a plenitude da divindade, tende piedade de nós. Coração de Jesus, no qual o Pai pôs as suas complacências, tende piedade de nós. Coração de Jesus, de cuja plenitude todos nós recebemos, tende piedade de nós. Coração de Jesus, desejo das colinas eternas, tende piedade de nós. Coração de Jesus, paciente e de muita misericórdia, tende piedade de nós. Coração de Jesus, rico para todos os que vos invocam, tende piedade de nós. Coração de Jesus, fonte de vida e santidade, tende piedade de nós. Coração de Jesus, propiciação pelos nossos pecados, tende piedade de nós. Coração de Jesus, saturado de opróbrios, tende piedade de nós. Coração de Jesus, atribulado por causa dos nossos crimes, tende piedade de nós. Coração de Jesus, feito obediente até a morte, tende piedade de nós. Coração de Jesus, atravessado pela lança, tende piedade de nós. Coração de Jesus, fonte de toda consolação, tende piedade de nós. Coração de Jesus, nossa vida e ressurreição, tende piedade de nós. Coração de Jesus, nossa paz e reconciliação, tende piedade de nós. Coração de Jesus, vítima pelos pecadores, tende piedade de nós. Coração de Jesus, salvação dos que em vós esperam, tende piedade de nós. Coração de Jesus, esperança dos que expiram, tende piedade de nós. Coração de Jesus, delícia de todos os santos, tende piedade de nós. Cordeiro de Deus, que tirais o pecado do mundo, perdoai-nos, Senhor. Cordeiro de Deus, que tirais o pecado do mundo, ouvi-nos, Senhor. Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós. Jesus, manso e humilde de coração, fazei o nosso coração semelhante ao vosso. Amém.',
                contentLatin: 'Kyrie, eleison. Christe, eleison. Kyrie, eleison. Christe, audi nos. Christe, exaudi nos. Deus Pater de caelis, miserere nobis. Deus Filius, Redemptor mundi, miserere nobis. Deus Spiritus Sanctus, miserere nobis. Sancta Trinitas, unus Deus, miserere nobis. Cor Iesu, Filii Patris aeterni, miserere nobis. Cor Iesu, in sinu Virginis Matris a Spiritu Sancto formatum, miserere nobis. Cor Iesu, Verbo Dei substantialiter unitum, miserere nobis. Cor Iesu, maiestatis infinitae, miserere nobis. Cor Iesu, templum Dei sanctum, miserere nobis. Cor Iesu, tabernaculum Altissimi, miserere nobis. Cor Iesu, domus Dei et ianua caeli, miserere nobis. Cor Iesu, fornax ardens caritatis, miserere nobis. Cor Iesu, iustitiae et amoris receptaculum, miserere nobis. Cor Iesu, bonitate et amore plenum, miserere nobis. Cor Iesu, virtutum omnium abyssus, miserere nobis. Cor Iesu, omni laude dignissimum, miserere nobis. Cor Iesu, rex et centrum omnium cordium, miserere nobis. Cor Iesu, in quo sunt omnes thesauri sapientiae et scientiae, miserere nobis. Cor Iesu, in quo habitat omnis plenitudo divinitatis, miserere nobis. Cor Iesu, in quo Pater sibi complacuit, miserere nobis. Cor Iesu, de cuius plenitudine omnes nos accepimus, miserere nobis. Cor Iesu, desiderium collium aeternorum, miserere nobis. Cor Iesu, patiens et multae misericordiae, miserere nobis. Cor Iesu, dives in omnes qui invocant illum, miserere nobis. Cor Iesu, fons vitae et sanctitatis, miserere nobis. Cor Iesu, propitiatio pro peccatis nostris, miserere nobis. Cor Iesu, saturatum opprobriis, miserere nobis. Cor Iesu, ob scelera nostra attritum, miserere nobis. Cor Iesu, usque ad mortem obediens factum, miserere nobis. Cor Iesu, lancea perforatum, miserere nobis. Cor Iesu, fons totius consolationis, miserere nobis. Cor Iesu, vita et resurrectio nostra, miserere nobis. Cor Iesu, pax et reconciliatio nostra, miserere nobis. Cor Iesu, victima pro peccatoribus, miserere nobis. Cor Iesu, salus in te sperantium, miserere nobis. Cor Iesu, spes morientium, miserere nobis. Cor Iesu, deliciae sanctorum omnium, miserere nobis. Agnus Dei, qui tollis peccata mundi, parce nobis, Domine. Agnus Dei, qui tollis peccata mundi, exaudi nos, Domine. Agnus Dei, qui tollis peccata mundi, miserere nobis. Iesu, mitis et humilis corde, fac cor nostrum secundum cor tuum. Amen.',
                category: 'ladainha'
            }),
            // Mais orações devocionais
            new Prayer({
                id: '34',
                name: 'Oração pela Conversão',
                content: 'Senhor Jesus, que morreste na cruz para salvar todos os homens, olhai com misericórdia para os pecadores e os incrédulos. Que eles conheçam a vossa verdade e se convertam ao vosso amor. Que a vossa graça os toque e os conduza ao caminho da salvação. Que todos os homens possam um dia glorificar-vos no céu. Amém.',
                contentLatin: 'Domine Iesu, qui mortuus es in cruce ad salvandum omnes homines, respicite cum misericordia ad peccatores et incredulos. Cognoscant veritatem tuam et convertantur ad amorem tuum. Gratia tua eos tangat et ducat ad viam salutis. Omnes homines possint aliquando glorificare te in caelo. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '35',
                name: 'Oração pela Perseverança',
                content: 'Senhor Jesus, que dissestes: "Quem perseverar até o fim será salvo", dai-me a graça da perseverança final. Que eu nunca vos abandone, mesmo nas maiores provações. Que eu mantenha sempre a fé, a esperança e a caridade. Que eu possa morrer na vossa graça e alcançar a vida eterna. Amém.',
                contentLatin: 'Domine Iesu, qui dixisti: "Qui perseveraverit usque in finem, hic salvus erit", da mihi gratiam perseverantiae finalis. Numquam te relinquam, etiam in maximis probationibus. Semper servem fidem, spem et caritatem. Possim mori in gratia tua et consequi vitam aeternam. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '36',
                name: 'Oração pela Humildade',
                content: 'Senhor Jesus, que vos fizestes pequeno e humilde, ensinai-me a humildade. Que eu reconheça a minha pequenez e dependência de vós. Que eu não busque a glória dos homens, mas apenas a vossa glória. Que eu seja sempre grato pelos vossos dons e reconheça que tudo vem de vós. Amém.',
                contentLatin: 'Domine Iesu, qui te parvum et humilem fecisti, doce me humilitatem. Cognoscam parvitatem et dependentiam meam a te. Non quaeram gloriam hominum, sed solum gloriam tuam. Semper sim gratus pro donis tuis et recognoscam omnia a te venire. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '37',
                name: 'Oração pela Caridade',
                content: 'Senhor Jesus, que sois o amor encarnado, ensinai-me a amar como vós amastes. Que eu ame a Deus sobre todas as coisas e ao próximo como a mim mesmo. Que eu seja paciente, bondoso, não invejoso, não orgulhoso, não egoísta. Que eu suporte tudo, creia tudo, espere tudo, suporte tudo. Amém.',
                contentLatin: 'Domine Iesu, qui es amor incarnatus, doce me amare sicut tu amasti. Ame Deum super omnia et proximum sicut me ipsum. Sim patiens, benignus, non aemulator, non superbus, non ambitiosus. Omnia sustineam, omnia credam, omnia sperem, omnia sustineam. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '38',
                name: 'Oração pela Pureza',
                content: 'Senhor Jesus, que sois a pureza infinita, purificai o meu coração e a minha mente. Que eu mantenha sempre a castidade e a modéstia. Que eu evite tudo o que possa manchar a minha alma. Que eu seja puro de coração para ver a Deus. Amém.',
                contentLatin: 'Domine Iesu, qui es puritas infinita, purifica cor meum et mentem meam. Semper servem castitatem et modestiam. Evitem omnia quae possunt maculare animam meam. Sim mundus corde ut videam Deum. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '39',
                name: 'Oração pela Obediência',
                content: 'Senhor Jesus, que fostes obediente até a morte de cruz, ensinai-me a obediência. Que eu seja sempre submisso à vossa vontade e à autoridade legítima. Que eu não me revolte contra as provações, mas as aceite como vindo de vós. Que eu seja dócil como uma criança. Amém.',
                contentLatin: 'Domine Iesu, qui fuisti obediens usque ad mortem crucis, doce me obedientiam. Semper sim submissus voluntati tuae et auctoritati legitimae. Non me revolvam contra probationes, sed eas accipiam ut venientes a te. Sim docilis sicut puer. Amen.',
                category: 'devocional'
            }),
            new Prayer({
                id: '40',
                name: 'Oração pela Sabedoria',
                content: 'Senhor Jesus, que sois a sabedoria de Deus, dai-me a sabedoria que vem do alto. Que eu saiba distinguir o bem do mal, a verdade do erro. Que eu tome sempre as decisões certas e caminhe pelos caminhos da virtude. Que eu seja sábio para a salvação da minha alma. Amém.',
                contentLatin: 'Domine Iesu, qui es sapientia Dei, da mihi sapientiam quae desursum est. Sciam distinguere bonum a malo, veritatem ab errore. Semper capiam decisiones rectas et ambulem per vias virtutis. Sim sapiens ad salutem animae meae. Amen.',
                category: 'devocional'
            })
        ];
    }

    static async findByCategory(category) {
        const prayers = await this.list();
        return prayers.filter(prayer => prayer.category === category);
    }

    static async findById(id) {
        const prayers = await this.list();
        return prayers.find(prayer => prayer.id === id);
    }
}
