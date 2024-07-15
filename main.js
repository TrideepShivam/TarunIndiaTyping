let CurrentState={ // used to compare current word and keep the space index values duting typing.
    readableCurrentIndex:20,
    readableWord:"",
    readableNextIndex:0,
    readableNextWord:"",
    writtenCurrentIndex:-1,
    writtenNextIndex:0,
    writtenWord:"",
    findWrittenWord:function(){
        let ele = document.getElementById('write');
        let content = ele.value;
        if(ele.selectionStart!=content.length)
            ele.selectionStart=content.length;
        // word = content.substring(this.writtenCurrentIndex+1,this.writtenNextIndex);
        // this.writtenCurrentIndex=this.writtenNextIndex;
        this.writtenWord=content.split(" ")[Result.words-1];
        debugger;
    },
    findReadableWord:function(){
        let content = document.getElementById('read').innerHTML;
        let counter = this.readableCurrentIndex+1;
        let character=content[counter];        
        let word="";
        while(character!=" "){
            word=word+character;
            counter++;
            character=content[counter];
        }
        this.readableCurrentIndex=counter;
        word=word.substring(0,word.length-7);
        this.readableWord=word;

        counter++;
        character=content[counter];
        word="";
        while(character!=" "){
            word=word+character;
            counter++;
            character=content[counter];
        }
        this.readableNextIndex=counter;
        this.readableNextWord=word;
    },
    isSameWord:function(){
        this.findWrittenWord();
        this.findReadableWord();
        let readable = this.readableWord;
        let written = this.writtenWord;
        if(readable==written)
            return true;
        else
            return false;
    }
}

const storys={//used to identify the readable content according to subject and level.
    Mangal:{
        level1:`<span id='highlight'>एक</span> बार कुछ बंदरों को एक बड़े से पिंजरे में डाला गया और वहां पर एक सीढी लगाई गई| सीढी के ऊपरी भाग पर कुछ केले लटका दिए गए|उन केलों को खाने के लिए एक बन्दर सीढी के पास पहुंचा| जैसे ही वह बन्दर सीढी पर चढ़ने लगा, उस पर बहुत सारा ठंडा पानी गिरा दिया गया और उसके साथ-साथ बाकी बंदरों पर भी पानी गिरा दिया गया| पानी डालने पर वह बन्दर भाग कर एक कोने में चला गया| थोड़ी देर बाद एक दूसरा बन्दर सीढी के पास पहुंचा| वह जैसे ही सीढी के ऊपर चढ़ने लगा, फिर से बन्दर पर ठंडा पानी गिरा दिया गया और इसकी सजा बाकि बंदरों को भी मिली और साथ-साथ दूसरे बंदरो पर भी ठंडा पानी गिरा दिया गया| ठन्डे पानी के कारण सारे बन्दर भाग कर एक कोने में चले गए| यह प्रक्रिया चलती रही और जैसे ही कोई बन्दर सीढी पर केले खाने के लिए चढ़ता, उस पर और साथ-साथ बाकि बंदरों को इसकी सजा मिलती और उन पर ठंडा पानी डाल दिया जाता| बहुत बार ठन्डे पानी की सजा मिलने पर बन्दर समझ गए कि अगर कोई भी उस सीढी पर चढ़ने की कोशिश करेगा तो इसकी सजा सभी को मिलेगी और उन सभी पर ठंडा पानी डाल दिया जाएगा| अब जैसे ही कोई बन्दर सीढी के पास जाने की कोशिश करता तो बाकी सारे बन्दर उसकी पिटाई कर देते और उसे सीढी के पास जाने से रोक देते| थोड़ी देर बाद उस बड़े से पिंजरे में से एक बन्दर को निकाल दिया गया और उसकी जगह एक नए बन्दर को डाला गया| नए बन्दर की नजर केलों पर पड़ी| नया बन्दर वहां की परिस्थिति के बारे में नहीं जानता था इसलिए वह केले खाने के लिए सीढी की तरफ भागा| जैसे ही वह बन्दर उस सीढी की तरफ भागा, बाकि सारे बंदरों ने उसकी पिटाई कर दी| `,
        level2:`<span id='highlight'>एक</span> नदी के किनारे एक जामुन के पेड़ पर एक बन्दर रहता था जिसकी मित्रता उस नदी में रहने वाले मगरमच्छ के साथ हो गयी। वह बन्दर उस मगरमच्छ को भी खाने के लिए जामुन देता रहता था। एक दिन उस मगरमच्छ ने कुछ जामुन अपनी पत्नी को भी खिलाये। स्वादिष्ट जामुन खाने के बाद उसने यह सोचकर कि रोज़ाना ऐसे मीठे फल खाने वाले का दिल भी खूब मीठा होगा, अपने पति से उस बन्दर का दिल लाने की ज़िद्द की। पत्नी के हाथों मजबूर हुए मगरमच्छ ने भी एक चाल चली और बन्दर से कहा कि उसकी भाभी उसे मिलना चाहती है, इसलिए वह उसकी पीठ पर बैठ जाये ताकि सुरक्षित उसके घर पहुँच जाए। बन्दर भी अपने मित्र की बात का भरोसा कर, पेड़ से नदी में कूदा और उसकी पीठ पर सवार हो गया। जब वे नदी के बीचों-बीच पहुंचे तो मगरमच्छ ने सोचा कि अब बन्दर को सही बात बताने में कोई हानि नहीं और उसने भेद खोल दिया कि उसकी पत्नी उसका दिल खाना चाहती है। बन्दर को धक्का तो लगा लेकिन उसने अपना धैर्य नहीं खोया और तपाक से बोला- 'ओह! तुमने यह बात मुझे पहले क्यों नहीं बताई क्योंकि मैंने तो अपना दिल जामुन के पेड़ की खोखल में सम्भाल कर रखा है। अब जल्दी से मुझे वापस नदी के किनारे ले चलो ताकि मैं अपना दिल लाकर अपनी भाभी को उपहार में देकर उसे खुश कर सकूं।' मूर्ख मगरमच्छ बन्दर को जैसे ही नदी-किनारे ले कर आया बन्दर ने ज़ोर से जामुन के पेड़ पर छलांग लगाई और क्रोध में भरकर बोला– 'अरे मूर्ख, दिल के बिना भी क्या कोई ज़िन्दा रह सकता है? जा, आज से तेरी-मेरी दोस्ती समाप्त।' मगरमच्‍छ निराश होकर घर चला जाता है। मित्रो, बचपन में पढ़ी यह कहानी आज भी मुसीबत के क्षणों में धैर्य रखने की प्रेरणा देती है ताकि हम कठिन समय का डट कर मुकाबला कर सकें। दूसरे, मित्रता का सदैव सम्मान करें। `,
		level3:`<span id='highlight'>एक</span> समय की बात है, एक जंगल में एक बंदर रहता था। वह बंदर अपने आपको बहुत चतुर समझता था। एक दिन जंगल के राजा शेर ने जगंल के बाहर जाकर खाने के लिए शिकार खोजने का फैसला किया। बंदर ने भी खाने की तलाश में जंगल की ओर रवाना हो गया। जंगल में जाते ही उसे एक छोटा सा खरगोश दिखाई दिया। खरगोश बहुत ही प्यारा और निर्मल दिख रहा था। बंदर ने सोचा कि यह खरगोश तो काफी छोटा है, इससे भूख नहीं मिटेगी। इसलिए उसने छोड़कर आगे निकल गया। खरगोश ने देखा कि बंदर ने उसे छोड़ दिया है। वह बंदर के पीछे पड़ गया और उसके पास जाकर बोला, “भैया, क्या आप मुझे खाने के लिए छोड़ देंगे?” बंदर ने खरगोश की बातों को नकारात्मकता से सुना और उसे फिर से छोड़ दिया। खरगोश ने फिर से बंदर के पीछे पड़ गया और उसके पास जाकर बोला, “भैया, क्या आप मुझे खाने के लिए छोड़ देंगे?” बंदर ने फिर से खरगोश की बातों को नकारात्मकता से सुना और उसे फिर से छोड़ दिया। खरगोश ने फिर से बंदर के पीछे पड़ गया और उसके पास जाकर बोला, “भैया, क्या आप मुझे खाने के लिए छोड़ देंगे?” इस बार बंदर ने खरगोश की बातों को सुना और उसे अपने साथ ले जाने का फैसला किया। खरगोश ने फिर से बंदर के पीछे पड़ गया और उसके पास जाकर बोला, “भैया, क्या आप मुझे खाने के लिए छोड़ देंगे?” इस बार बंदर ने खरगोश की बातों को सुना और उसे अपने साथ ले जाने का फैसला किया। खरगोश ने बंदर की मदद की और उसे खाने के लिए अपने गरम खरगोशी खाने के साथ ले गया। बंदर ने खरगोश की मदद के लिए धन्यवाद कहा और उसे अपने घर वापस ले जाने के लिए रास्ते में दिशा दिखाई। खरगोश ने बंदर को धन्यवाद कहा और उसे अपने घर वापस ले जाने के लिए रास्ते में दिशा दिखाई। बंदर ने खरगोश की मदद के लिए फिर से धन्यवाद कहा और उसे अपने घर वापस ले जाने के लिए रास्ते में दिशा दिखाई। खरगोश ने बंदर को धन्यवाद कहा और उसे अपने घर वापस ले जाने के लिए रास्ते में दिशा दिखाई। बंदर ने खरगोश की मदद के लिए फिर से धन्यवाद कहा और उसे अपने घर वापस ले जाने के लिए रास्ते में दिशा दिखाई। खरगोश ने बंदर को धन्यवाद कहा और उसे अपने घर वापस ले जाने के लिए रास्ते में दिशा दिखाई। बंदर ने खरगोश की मदद के लिए फिर से धन्यवाद कहा और उसे अपने घर वापस ले जाने के लिए रास्ते में दिशा दिखाई।`,
		level4:'level4',
		level5:'level5'
         },
    KrutiDev:{
        level1:"<span id='highlight'>gekjs</span> ns'k esa Loå Jherh bfUnjk xk¡/kh us Hkkjr ds okLrs dqckZfu;k nh gS] mUgsa fgUnqLrku lnk ;kn j[ksxkA ;gk¡ rd fd ns'k ds [kkfrj cgqr cM+h dqckZfu;k¡ nh gSA muds ejus ds ckn ftrus Hkh iz/kkuea=h ,ao eq[;ea=h cus lHkh us ok;nk fd;k Fkk] ge fgnqLrku ds fy;s bZekunkjh ,ao ru eu ls dk;Z djsxsaA gj bUlku dqlhZ dk Hkw[kk gksrk gSA dqlhZ tc rd mls ugha eyrh gS] rc rd >wB lp cksydj ok;ns djrk gSA tc oks ¼pqudj½ thr dj tkrk gSA ogk¡ vius fd;s gq, lkjs okns lc Hkwy tkrk gSA fQj rks mlds n'kZu Hkh ugha gksrs gSA mudk pijklh ;k ckWMh&xkMZ] lykgdkj feyus ls igys gh euk dj nsrk gSA fQj oks jkr fnu csbZekuh djuk] usrkth ?kj ij ugha gS] ckgj x;s gq, gSA fQj oks T;knk&ls&T;knk [kks[kyk] nwljs ns'kksa ls dtkZ djds ns'k dks dtZnkj dj nsrs gSA igys ;g ns'k lksus dh fpfM+;k dgykrk FkkA fdlh le; esa nw/k dh ufn;k¡ cgrh FkhaA vkt dy gj bUlku jkr fnu cbZekuh Hkz”Vkpkj gh djrk gS] dke oks djuk ugha pkgrkA mldk izFke mÌs'; jkr fnu iSlk dekus dk gS pkgs Hkys gh mls iSlk dekus ds okLrs D;k D;k djuk iM+rk gSA oks gh usrk cu ldrk gSA e¡gxkbZ bruh c<+ xbZ gSA fd mls vius [kpZ pykus ds fy, ljdkjh ukSdjh esa dke djus okyk pijklh ls ysdj vkWfQlj rd iSlk dekus es yxk gqvk gSA tks mls ljdkj ls ukSdjh feyrh gS] mlds vykok gsjk&Qsjh djus es yxk jgrk gSA fQj Hkh mlds ifjokj dk xqtkjk ugha gksrk gSA vkenuh vBUuh [kpkZ :i;k gSA bUlku us vius [kpZ brus uktk;t+ c<+k j[ks gSaA igys tekus esa eksVk [kkrs Fks] eksVk igurs FksA igys ,d dekrk Fkk iwjk ifjokj cSBdj [kkrk FkkA vkt dy ?kj ifjokj Hkh fc[kjs gq, gSaA fdlh dks fdlh ds fy, le; ugha gSA fdlh egkiq:”k us dgk Fkk *LoxZ vkSj udZ fdlh Hkh ifjokj ds la;qä gksus ij fuHkZj djrk gSA* eSa vk’kk djrk gq¡ fd LoxZ vkSj udZ dk mŸkj vkidks fey x;k gksA esjh rks ;gh bPNk gS fd lHkh lq[kh gksa lHkh LoLFk gksaA D;ksafd vki rks tkurs gh gSa fd gekjh ;gh laLd`fr gS& ^olq/kSo dqVqEcde~A*",
        level2:'level2',
        level3:'level3',
        level4:'level4',
        level5:'level5'
         },
    English:{
        level1:`<span id='highlight'>A</span> long time ago, during a devastating spell of dry weather, there was a thirsty crow who was desperate for a drink of water. The poor crow flew and flew in search of a means to quench his thirst. From one place to another place he went, until, at long last, when he could fly no further, he came upon a large pitcher of water at the base of a tree. Overjoyed, the thirsty crow thrust its jet-black beak inside to drink his fill. But, alas! the pitcher had a narrow neck. Try as he might, the despairing crow couldn't get his head far enough inside. To his dismay, he realized the water was out of reach. The thirsty crow cried out and flapped his wings in anguish. He attempted to knock the pitcher over. But to no avail. It was too heavy for his weary, dehydrated body to budge. The crow was on the verge of exhaustion and ready to fly elsewhere. But then an idea came to him. Around the base of the pitcher he seen some small round pebbles. Picking them up, one by one, the thirsty crow dropped them into the pitcher. Again and again he placed these stones inside. And with every extra pebble, the water level began to rise. His idea worked. Eventually, after much toil, the water rose so high inside the pitcher that the clever crow was able to drink his fill and state his thirst for good. Then he flew away for his work. So, now we can say this situation in our life too. Humans are always stuck in any of the problem every time and here is no way to solve them immediately then every one should have to keep calm and think more about the solution we need and definitely you will get any solution as like as crow gets it. It is said, 'There is a will, there is a way' always. Thank you for reading this story. `,
        level2:`<span id='highlight'>In</span> a small village in India, there lived a kind-hearted boy named Arjun, who had a special bond with an elderly elephant named Rani. Rani, once a majestic temple elephant, had been abandoned after her owner fell into hard times. Arjun would bring her food daily and often play with her in the nearby river, creating a deep friendship that transcended words. One day, a severe drought struck the village, leaving the fields parched and the villagers in despair, struggling to find water and food. As the days passed, hopelessness spread among the villagers. Remembering the stories of how Rani used to bring blessings to the temple, Arjun felt a spark of hope. He decided to lead her to the village square, believing her presence could uplift everyone’s spirits. Initially skeptical, the villagers gathered around as Rani, sensing their need, began to sway her trunk gracefully, creating a rhythm that resonated in their hearts. Inspired by Arjun’s unwavering love and faith, the villagers joined him in song and dance, celebrating their community and their bond with nature. The vibrant energy of their unity filled the air, and as if answering their call, dark clouds began to gather in the sky. Rain started to fall gently at first, then poured down, soaking the dry earth and revitalizing the land. From that day on, Rani became a beloved symbol of resilience, love, and hope. The villagers worked together to cultivate their fields, using the lessons they learned from their time with Rani and Arjun. The village flourished, and festivals were held in Rani’s honor, celebrating not just the rain but the power of kindness and community.Arjun grew up to be a wise leader, and Rani remained by his side, a constant reminder that compassion can bridge even the most profound divides. Their story became legend, passed down through generations, inspiring countless others to cherish the bonds of friendship and the importance of caring for all living beings. The village thrived, forever grateful for the boy and the elephant who taught them the true meaning of hope and togetherness.`,
        level3:`<span id='highlight'>In</span> the heart of the mystical land of Eldoria, 
        where ancient forests whispered secrets and crystal-clear rivers sang lullabies, stood a grand and ancient castle. This was no ordinary castle, for it housed the Guardian of Eldoria, a being of immense power and wisdom, 
        chosen to protect the realm from the forces of darkness. 
        The Guardian's name was Aelinor. Aelinor was an elf of unparalleled 
        beauty and grace, with long silver hair that shimmered like moonlight 
        and eyes as blue as the deepest ocean. Her presence radiated a sense 
        of calm and authority, and she was revered by all the inhabitants of Eldoria. 
        The elves, dwarves, humans, and magical creatures all looked up to her for 
        guidance and protection. One fateful day, 
        a dark shadow loomed over Eldoria. The once peaceful skies were 
        filled with ominous clouds, and the birds stopped singing. Rumors spread that the Dark Sorcerer, Malgroth, had returned. Malgroth was a malevolent force, banished centuries ago by Aelinor's ancestors, and his return signaled great peril for the land. Aelinor knew that the time had come to fulfill her destiny. She summoned the Council of Elders, a group of wise beings from all corners of Eldoria, to discuss the impending threat. The council convened in the Great Hall, its walls adorned with tapestries depicting legendary battles and heroic deeds. "We must act swiftly," Aelinor declared, her voice resonating with determination. "Malgroth's power grows stronger with each passing moment. We must unite and defend our home." The council members nodded in agreement. Among them was Thorin, a stout dwarf with a heart of gold and unmatched skill in forging weapons. There was also Lysandra, a human sorceress with a deep understanding of ancient spells and enchantments, and Fenrir, a brave and noble wolf who commanded the respect of all woodland creatures. Together, they devised a plan to thwart Malgroth's dark ambitions. Aelinor would lead a small but powerful team on a quest to find the Crystal of Light, an artifact said to possess the power to banish any evil. The crystal was hidden in the treacherous peaks of the Shadow Mountains, a place where no one dared to venture. As they embarked on their perilous journey, Aelinor and her companions faced countless challenges. They traversed dense forests teeming with dangerous creatures, crossed raging rivers, and climbed steep, icy cliffs. Along the way, they encountered allies who offered their assistance, including a band of skilled archers led by the valiant Elara and a group of wise and ancient treants who provided guidance and shelter. Despite the hardships, Aelinor's unwavering resolve and the unity of her companions kept them going. They reached the summit of the Shadow Mountains, where the Crystal of Light was said to be guarded by a fearsome dragon named Draconis. The dragon, with scales as black as night and eyes that glowed like molten lava, was a formidable adversary. "We come in peace, great Draconis," Aelinor called out, her voice echoing through the cavern. "We seek the Crystal of Light to save our land from the Dark Sorcerer Malgroth." Draconis, sensing the sincerity in Aelinor's words and recognizing her as the Guardian of Eldoria, agreed to test their worthiness.`,
        level4:`<span id='highlight'>The</span> old bookstore on the corner of Maple Street had seen better days. Its wooden shelves sagged under the weight of countless volumes, their spines faded and pages yellowed. The bell jingled as I stepped in, the scent of aged paper and memories enveloping me. Mr. Thompson, the proprietor, sat behind the counter, his wiry frame hunched over a leather-bound book. His silver hair matched the dust motes dancing in the sunbeam that streamed through the window. He glanced up, his eyes crinkling at the corners. “Back again, young one?” he rasped, his voice a symphony of crackles. “Looking for something special?” I nodded, my gaze sweeping over the shelves. Each book held a story—a secret waiting to be unlocked. I’d spent countless afternoons here, lost in worlds beyond my own. But today, I sought something different. “An adventure,” I said. “Something unexpected.” Mr. Thompson leaned back, studying me. “Ah, the thrill of the unknown. Follow me.” He shuffled toward the back, his cane tapping a rhythm on the creaky floorboards. I trailed behind, my fingers grazing the spines. Dust clung to my skin, a badge of honor. We reached a hidden alcove, its shelves crammed with tattered tomes. “Here,” he said, pulling out a slim volume. “This one has been waiting for you.” The cover depicted a moonlit forest, its trees bending toward a hidden path. The title—The Whispering Woods—sent a shiver down my spine. I opened it, and the words flowed like a forgotten melody. The tale wove magic and mystery—a lost key, a moonflower’s bloom, and a promise whispered on the wind. I lost track of time, immersed in a world where shadows danced and stars held secrets. As I read, Mr. Thompson watched, his eyes alight with ancient wisdom. “Stories choose their readers,” he murmured. “And you, my dear, are meant for this one.” I devoured the pages, my heart racing. The characters became friends, their struggles mine. The moonflower’s fragrance filled my senses, and I yearned for the hidden path. When I reached the final chapter, Mr. Thompson leaned closer. “Remember,” he said, “adventures don’t end with the last page. Carry their magic into your life.” I stepped out of the bookstore, the bell chiming farewell. The sun had dipped below the horizon, casting long shadows. But I clutched The Whispering Woods to my chest, its promise burning bright. And as I walked home, I listened—the wind, the rustling leaves—they whispered secrets only I could hear.`,
        level5:`In<span id='highlight'>In</span> the ancient land of Myrthoria, where towering mountains kissed the sky 
        and lush valleys spread out like a painter's canvas, lay the prosperous city of 
        Arcanis. This city was renowned for its scholars and warriors, and at its heart 
        stood the grand Temple of Luminar. The temple housed the sacred Orb of Ages, 
        a relic believed to possess the power to control time. The Orb was guarded by a 
        chosen warrior, a role passed down through generations. The current guardian was 
        Thalos, a man of immense strength and unwavering loyalty. Thalos, 
        with his rugged features and piercing green eyes, was respected by all. His lineage 
        traced back to the legendary hero Alaric, who had saved Myrthoria from countless 
        invasions. One day, an ominous prophecy emerged. It foretold the return of the 
        Dark Warlord, Serak, who was defeated 1,000 years ago. The prophecy stated that 
        on the 7th day of the 7th month of the 7th year of the current cycle, Serak would rise again to plunge Myrthoria into eternal darkness. As the fateful day approached, Thalos sought the counsel of the High Priestess Elara, a woman of great wisdom and mystical powers. "We must prepare, Thalos," Elara warned. "Serak's power is unimaginable, but there is hope. The Orb of Ages can send Serak back to his realm, but only if wielded by one with a pure heart and unyielding courage." Thalos knew the weight of this responsibility. He gathered a group of the finest warriors and scholars, including his closest friend, Darius, a brilliant strategist, and Lyra, a skilled archer with unmatched precision. They devised a plan to confront Serak and protect the Orb. On the dawn of the 7th day of the 7th month in the year 707, dark clouds gathered over Arcanis. The ground trembled as Serak emerged from the depths of the earth, his eyes burning with malice. Thalos and his companions stood ready at the temple's entrance. "We will not let you destroy our land," Thalos declared, gripping his sword tightly. A fierce battle ensued. Serak's dark magic clashed with the warriors' strength and determination. Darius's strategies kept the group coordinated, while Lyra's arrows found their mark, weakening Serak. Despite their valiant efforts, Serak's power seemed overwhelming. In a moment of desperation, Thalos remembered Elara's words. With a resolute heart, he approached the Orb of Ages. "By the light of Luminar, I command time to turn back and banish this evil," Thalos shouted. The Orb glowed with a brilliant light, enveloping Thalos and Serak. The air crackled with energy as the power of the Orb activated. Serak's roar of fury was drowned out by the blinding light, and in an instant, he was gone. The sky cleared, and peace returned to Myrthoria. Thalos, exhausted but victorious, placed the Orb back in its sacred pedestal. The people of Arcanis hailed him as a hero, and the prophecy was etched into the annals of history as a reminder of the bravery and unity that saved their land. Thalos knew that the true victory lay in the strength of his companions and the wisdom of their ancestors. From that day on, he continued to guard the Temple of Luminar, ever vigilant against any threat that might arise. The legend of Thalos and his brave companions lived on, a testament to the enduring light that could conquer even the darkest of shadows.`
         },
    setLanguageLevel:function(languageName,levels){
        return this[languageName][levels];
    }
 }
let scrollPixel=0;//to calculate scroll top for read Element;
let userDetail={}//includes user's detail from first form.
var setvalue=null;//used to aquire timer interval to stop and resume the timer
let Timing={//containers time value with minute, tens value of second and ones value of second.
    min:0,
    secTens:0,
    secOnes:0
}
 
let Result = {
    words:0,
    keystrokes:0,
    error:0,
    totalTime:0,
    errorWords:[]
}

function start(){
    let today=new Date();
    // if(today.getDay()==6){/*set it as ==6 if you don't wanna start app on sunday*/
    if(true){
        let entry=document.getElementsByClassName('dataEntry');
        if(entry[0].value!="" && entry[0].value!=" "){
            for(i=0;i<entry.length;i++){
                ele=entry[i];
                if(ele.type=="checkbox" || ele.type=="radio"){
                    userDetail[ele.name]=ele.checked;
                }
                else{
                    userDetail[ele.name]=ele.value;
                }
            }
            deploy(userDetail);
            document.getElementsByClassName('popupContainer')[0].remove();
        }else{
            alert("Please Write Your name Correctly.");
        }
    }
    // }else{
    //     let main = document.getElementsByClassName('popupContainer')[0];
    //     main.innerHTML=`
    //                     <div id="popup">
    //                         <p id="highlight">App will Start only on</p>
    //                         <h1 class="specialText"><b>शनिवार</b></h1>
    //                         <div id="animationContainer">
    //                             <div class="animationBox" id="ab10">ध</div>
    //                             <div class="animationBox" id="ab9">न्‍य</div>
    //                             <div class="animationBox" id="ab8">वा</div>
    //                             <div class="animationBox" id="ab7">द</div>
    //                             <div class="animationBox" id="ab6">म्</div>
    //                         </div>
    //                         <button class="btn" id="btnClose" onclick="window.close();">close</btn>
    //                     </div>
    //                     `;
    //     document.getElementById('popup').style.cssText="background-image:url('saturdayImg.png');background-size:cover;justify-content:flex-start;";
    // }
}

function deploy(){
    //put user detail in global object to use it on restart.
    let readPara=document.getElementById('read');
    readPara.innerHTML=storys.setLanguageLevel(userDetail.subject,userDetail.level);
    document.getElementById('userName').innerHTML=userDetail.username;
    Timing.min = userDetail.timing.slice(0,2);
    document.getElementById('timers').value= Timing.min + ':00';
    Result.totalTime=Timing.min;
    readPara.classList.add(setLang(userDetail.subject));
    document.getElementById('write').classList.add(setLang(userDetail.subject));
    if(userDetail.highlight){
        document.getElementById('highlight').removeAttribute('id'); /* change the id because the style is merged as inline style in highlight */
        CurrentState.readableCurrentIndex=5;
    }
    
}

function setLang(subs) {
    switch (subs) {
        case 'English':
            return 'forEnglish';
        case 'KrutiDev':
			document.getElementById('write').placeholder=";gk¡ fy[ksa";
            return 'forKrutiDev';
        case 'Mangal':
            return 'forMangal';
        default:
            break;
    }
}

function countdown(time){

    let minuteOnes=time.slice(time.length-1,time.length);
    let minuteTens;

    if(time.length==1){minuteTens=0;}
    else{minuteTens=time.slice(0,1);}

    let timeshow=document.getElementById('timers');
    timeshow.value=minuteTens+''+minuteOnes+':'+Timing.secTens+''+Timing.secOnes;
       

    setvalue=setInterval(function()
    {
        if(timeshow.value==0+''+0+':'+0+''+0)
        {
            frontPopup(true);
            dashborad(Result);
            clearInterval(setvalue);  
        }

        else{  
             if(Timing.secOnes==0)
                    Timing.secOnes=9;
                else{Timing.secOnes--}

            if(Timing.secOnes==9)Timing.secTens--;

            if(Timing.secTens==-1){
                minuteOnes--;
                Timing.secTens=5;
            }

            if(minuteOnes==-1){
                minuteTens--;
                minuteOnes=9;
            }

            timeshow.value=minuteTens+''+minuteOnes+':'+Timing.secTens+''+Timing.secOnes;
        }
    },1000);
}

function highlightNext(){
    let highlightedArea = document.querySelector('#read span').innerHTML;
    let content = document.getElementById('read');
    //used to identify that how many words there in the total story.
    // let c=content.innerHTML;
    // let count=0;
    // for(i=0;i<c.length;i++){
    //     if(c[i]==' '){count++;}
    // }
    // console.log(count);

    let nonHighlightedArea = content.innerHTML.substring(CurrentState.readableNextIndex);
    if(!userDetail.highlight){
        content.innerHTML='<span id="highlight">'+highlightedArea+' '+CurrentState.readableNextWord+'</span>'+nonHighlightedArea;
    }else{/* if user prevent highlights*/
        content.innerHTML='<span>'+highlightedArea+' '+CurrentState.readableNextWord+'</span>'+nonHighlightedArea;
    }
    CurrentState.readableCurrentIndex-=7;
}

function typing(currentEle,e){
    Result.keystrokes+=1;
    let content= currentEle.value;
    let newKey= e.code;
    let w = document.getElementById('write');
    if(w.style.color=='tomato'){
    		w.style.color='white';
    }
    if(newKey=='Space'){
        let currentSpace=content.length-1;
        let r = document.getElementById('readable');
        if((Result.words+1)%75==0){
             scrollPixel+=140;//scroll automatically
             r.scrollTop=scrollPixel;
        }
        CurrentState.writtenNextIndex = content[currentSpace]==' '?currentSpace:currentSpace-1;
        // console.log('next space '+CurrentState.writtenNextIndex+' char is '+content[CurrentState.writtenNextIndex]);        
         Result.words+=1;
         document.getElementById('totalWords').value=Result.words;
         if(!CurrentState.isSameWord()){
     	    w.style.color='tomato';
            Result.error+=1;
            if(userDetail.subject!='KrutiDev'){
                eWord='['+CurrentState.readableWord+' : '+CurrentState.writtenWord+']';
            }else{
                eWord='¿'+CurrentState.readableWord+' % '+CurrentState.writtenWord+'À';
            }             
             Result.errorWords.push(eWord);
         }
         highlightNext();
         
     }else if(newKey=='Pause'){
         clearInterval(setvalue);
         let timeshowValue=document.getElementById('timers').value;
         Timing.min=timeshowValue.slice(0,2);
         Timing.secTens=timeshowValue.slice(3,4);
         Timing.secOnes=timeshowValue.slice(4,5);
         setvalue=null;
     }else{
         if(setvalue==null){
             countdown(Timing.min);
         }
         // startTimer
     }
}

function backspacePrevent(e,content){
    let condition = userDetail.backspace?e.code=='Backspace':e.code=='Backspace'&&content[content.length-1]==' ';
    if(condition){
        // console.log(e.code+" "+condition)
        e.preventDefault();
    }
}
// put all commented detail in user detail global object
