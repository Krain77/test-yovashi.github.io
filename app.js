var qnum = 1;

			const question_list = {
				q1: {
					question: "Мне хотелось бы в своей профессиональной деятельности:",
					var1: "общаться с самыми разными людьми;",
					var2: "что-нибудь делать своими руками – мебель, одежду, машины и т.д.;",
					var3: "что-нибудь делать своими руками – мебель, одежду, машины и т.д.;",
					answer: 0,
				},
				q2: {
					question: "В книге или кинофильме меня больше всего привлекает:",
					var1: "художественная форма, мастерство писателя или режиссера;",
					var2: "сюжет, действие героев;",
					var3: "информация, которая может пригодиться в жизни.",
					answer: 0,
				},
				q3: {
					question: "Меня обрадует Нобелевская премия:",
					var1: "в области науки;",
					var2: "за общественную деятельность;",
					var3: "в области искусства.",
					answer: 0,
				},
				q4: {
					question: "Я скорее соглашусь стать:",
					var1: "управляющим банка;",
					var2: "главным инженером на производстве;",
					var3: "начальником экспедиции.",
					answer: 0,
				},
				q5: {
					question: "Будущее людей определяет:",
					var1: "достижение науки;",
					var2: "развитие производства;",
					var3: "взаимопонимание среди людей.",
					answer: 0,
				},
				q6: {
					question: "На месте директора школы я прежде всего займусь:",
					var1: "благоустройством школы (столовая, спортзал, компьютеры);",
					var2: "созданием дружного, сплоченного коллектива;",
					var3: "разработкой новых технологий обучения.",
					answer: 0,
				},
				q7: {
					question: "На технической выставке меня больше всего привлечет:",
					var1: "внешний вид экспонатов (цвет, форма);",
					var2: "внутреннее устройство экспонатов (механизм);",
					var3: "практическое применение экспонатов.",
					answer: 0,
				},
				q8: {
					question: "В людях я ценю прежде всего:",
					var1: "мужество, смелость, выносливость;",
					var2: "дружелюбие, чуткость, отзывчивость;",
					var3: "ответственность, аккуратность.",
					answer: 0,
				},
				q9: {
					question: " В свободное от работы время я буду:",
					var1: "писать стихи или музыку или рисовать;",
					var2: "ставить различные опыты;",
					var3: "тренироваться.",
					answer: 0,
				},
				q10: {
					question: "В заграничных поездках меня больше всего привлечет:",
					var1: "экстремальный туризм (альпинизм, виндсерфинг, горные лыжи);",
					var2: "деловое общение;",
					var3: "возможность знакомства с историей и культурой другой страны.",
					answer: 0,
				},
				q11: {
					question: "Мне интереснее беседовать:",
					var1: "о машине нового типа;",
					var2: "о новой научной теории;",
					var3: "о человеческих взаимоотношениях",
					answer: 0,
				},
				q12: {
					question: "Если бы в моей школе было всего три кружка, я бы выбрал:",
					var1: "технический;",
					var2: "музыкальный;",
					var3: "спортивный.",
					answer: 0,
				},
				q13: {
					question: "В школе больше внимания следует уделять:",
					var1: "улучшению взаимопонимания между учителями и учениками;",
					var2: "поддержанию здоровья учащихся, занятиям спортом;",
					var3: " укреплению дисциплины.",
					answer: 0,
				},
				q14: {
					question: "Я с большим интересом смотрю:",
					var1: "научно-популярные фильмы;",
					var2: "программы о культуре и спорте;",
					var3: "спортивные программы.",
					answer: 0,
				},
				q15: {
					question: "Мне было бы интереснее работать:",
					var1: "с машинами, механизмами;",
					var2: "с объектами природы;",
					var3: "с детьми или сверстниками.",
					answer: 0,
				},
				q16: {
					question: "Школа в первую очередь должна:",
					var1: "давать знания и умения;",
					var2: "учить общению с другими людьми;",
					var3: "обучать навыкам работы.",
					answer: 0,
				},
				q17: {
					question: "Каждый человек должен:",
					var1: "вести здоровый образ жизни;",
					var2: "иметь возможность заниматься творчеством;",
					var3: "иметь удобные бытовые условия.",
					answer: 0,
				},
				q18: {
					question: "Для благополучия общества в первую очередь необходима:",
					var1: "защита интересов и прав граждан;",
					var2: "забота о материальном благополучии людей;",
					var3: "наука и технический прогресс.",
					answer: 0,
				},
				q19: {
					question: "Мне больше всего нравятся уроки:",
					var1: "физкультуры;",
					var2: "математики;",
					var3: "труда.",
					answer: 0,
				},
				q20: {
					question: "Мне интереснее было бы:",
					var1: "планировать производство продукции;",
					var2: "изготавливать изделия;",
					var3: "заниматься сбытом продукции.",
					answer: 0,
				},
				q21: {
					question: " Я предпочитаю читать статьи:",
					var1: "о выдающихся ученых и их открытиях;",
					var2: "о творчестве ученых и музыкантов;",
					var3: "об интересных изобретениях.",
					answer: 0,
				},
				q22: {
					question: " Свободное время я охотнее провожу:",
					var1: "делая что-то по хозяйству;",
					var2: "с книгой;",
					var3: "на выставках, концертах и пр.",
					answer: 0,
				},
				q23: {
					question: " Больший интерес у меня вызовет сообщение:",
					var1: "о художественной выставке;",
					var2: "о ситуации на фондовой бирже;",
					var3: "о научном открытии.",
					answer: 0,
				},
				q24: {
					question: "Я предпочитаю работать:",
					var1: "в помещении, где много людей;",
					var2: "в необычных условиях;",
					var3: "в обычном кабинете.",
					answer: 0,
				},
			};

			const get_obj = (qnum) => {
				switch (qnum) {
					case 1:
						object = question_list.q1;
						break;
					case 2:
						object = question_list.q2;
						break;
					case 3:
						object = question_list.q3;
						break;
					case 4:
						object = question_list.q4;
						break;
					case 5:
						object = question_list.q5;
						break;
					case 6:
						object = question_list.q6;
						break;
					case 7:
						object = question_list.q7;
						break;
					case 8:
						object = question_list.q8;
						break;
					case 9:
						object = question_list.q9;
						break;
					case 10:
						object = question_list.q10;
						break;
					case 11:
						object = question_list.q11;
						break;
					case 12:
						object = question_list.q12;
						break;
					case 13:
						object = question_list.q13;
						break;
					case 14:
						object = question_list.q14;
						break;
					case 15:
						object = question_list.q15;
						break;
					case 16:
						object = question_list.q16;
						break;
					case 17:
						object = question_list.q17;
						break;
					case 18:
						object = question_list.q18;
						break;
					case 19:
						object = question_list.q19;
						break;
					case 20:
						object = question_list.q20;
						break;
					case 21:
						object = question_list.q21;
						break;
					case 22:
						object = question_list.q22;
						break;
					case 23:
						object = question_list.q23;
						break;
					case 24:
						object = question_list.q24;
						break;
				}
				return object;
			};


			var about = false;
			const test_about = () => {
				el = document.getElementById("test-about-invisible");

				if (about) {
					about = false;
					el.style.display = "block";
				} else if (about == false) {
					about = true;
					el.style.display = "none";
				}
			};



			const test_not_viod = () => {
				let results = 0;
				for (let i = 0; i < 25; i++) {
					object = get_obj(i);
					if (object.answer != 0) results++;
				}
				console.log(results)
				if (results == 25) return true;
				else return false;
			};



			const next_question = () => {
				const btn = document.getElementById("button-next");

				const question_ch1 = document.getElementById("ch1");
				const question_ch2 = document.getElementById("ch2");
				const question_ch3 = document.getElementById("ch3");
				let answer = 0;


				if (question_ch1.checked) answer = 1;
				else if (question_ch2.checked) answer = 2;
				else if (question_ch3.checked) answer = 3;


				object = get_obj(qnum);
				object.answer = answer;
				console.log(object)

				if (qnum < 24) {
					qnum += 1;
					object = get_obj(qnum);

					const question_title = document.getElementById("id_quest");
					const question_num = document.getElementById("qnum");

					const question_label1 = document.getElementById("chl1");
					const question_label2 = document.getElementById("chl2");
					const question_label3 = document.getElementById("chl3");

					question_num.textContent = `Вопрос №${qnum}`;
					question_title.textContent = object.question;

					question_label1.innerHTML = object.var1;
					question_label2.innerHTML = object.var2;
					question_label3.innerHTML = object.var3;

					question_ch1.checked = false
					question_ch2.checked = false
					question_ch3.checked = false
					
					switch (object.answer){
						case 1: question_ch1.checked = true; break
						case 2: question_ch2.checked = true; break
						case 3: question_ch3.checked = true; break
					}
				}
				if (btn.textContent == "Завершить") {
					if (test_not_viod()) {
						console.log("YESSS")
						result = end_results()

						document.getElementById("block1").style.display = "none"
						document.getElementById("results").style.display = "block"

						document.getElementById("results").textContent = `Ваш результат - \n ${result}`
					} else {
						alert("Вы не ответили на все вопросы.");
					}
				}
				if (qnum == 24) {
					btn.textContent = "Завершить";
				}
			};

			const back_question = () => {
				const question_ch1 = document.getElementById("ch1");
				const question_ch2 = document.getElementById("ch2");
				const question_ch3 = document.getElementById("ch3");

				let answer = 0

				if (question_ch1.checked) answer = 1;
				if (question_ch2.checked) answer = 2;
				if (question_ch3.checked) answer = 3;

				object = get_obj(qnum);
				object.answer = answer;

				if (qnum > 1) {
					qnum -= 1;
					object = get_obj(qnum);

					const question_title = document.getElementById("id_quest");
					const question_num = document.getElementById("qnum");

					const question_label1 = document.getElementById("chl1");
					const question_label2 = document.getElementById("chl2");
					const question_label3 = document.getElementById("chl3");

					question_title.textContent = object.question;
					question_num.textContent = `Вопрос №${qnum}`;

					question_label1.innerHTML = object.var1;
					question_label2.innerHTML = object.var2;
					question_label3.innerHTML = object.var3;

					const btn = document.getElementById("button-next");
					btn.textContent = "Далее";

					question_ch1.checked = false
					question_ch2.checked = false
					question_ch3.checked = false
					
					switch (object.answer){
						case 1: question_ch1.checked = true; break
						case 2: question_ch2.checked = true; break
						case 3: question_ch3.checked = true; break
					}
					// if (object.answer == 1) question_ch1
				}
			};


			const end_results = () => {
				result_list = {
					b1: 0,
					b2: 0,
					b3: 0,
					b4: 0,
					b5: 0,
					b6: 0
				}

				switch (question_list.q1.answer){
					case 1: result_list.b1++; break
					case 2:	result_list.b6++; break
					case 3:	result_list.b4++; break
				} switch (question_list.q2.answer){
					case 1: result_list.b4++; break
					case 2: result_list.b5++; break
					case 3: result_list.b2++; break
				} switch (question_list.q3.answer){
					case 1: result_list.b2++; break
					case 2: result_list.b1++; break
					case 3: result_list.b4++; break
				} switch (question_list.q4.answer){
					case 1: result_list.b6++; break
					case 2: result_list.b3++; break
					case 3: result_list.b5++; break
				} switch (question_list.q5.answer){
					case 1: result_list.b2++; break
					case 2: result_list.b3++; break
					case 3: result_list.b1++; break
				} switch (question_list.q6.answer){
					case 1: result_list.b6++; break
					case 2: result_list.b1++; break
					case 3: result_list.b2++; break
				} switch (question_list.q7.answer){
					case 1: result_list.b4++; break
					case 2: result_list.b2++; break
					case 3: result_list.b3++; break
				} switch (question_list.q8.answer){
					case 1: result_list.b5++; break
					case 2: result_list.b1++; break
					case 3: result_list.b6++; break
				} switch (question_list.q9.answer){
					case 1: result_list.b4++; break
					case 2: result_list.b2++; break
					case 3: result_list.b5++; break
				} switch (question_list.q10.answer){
					case 1: result_list.b5++; break
					case 2: result_list.b6++; break
					case 3: result_list.b4++; break
				} switch (question_list.q11.answer){
					case 1: result_list.b3++; break
					case 2: result_list.b2++; break
					case 3: result_list.b1++; break
				} switch (question_list.q12.answer){
					case 1: result_list.b3++; break
					case 2: result_list.b4++; break
					case 3: result_list.b5++; break
				} switch (question_list.q13.answer){
					case 1: result_list.b1++; break
					case 2: result_list.b5++; break
					case 3: result_list.b6++; break
				} switch (question_list.q14.answer){
					case 1: result_list.b4++; break
					case 2: result_list.b2++; break
					case 3: result_list.b5++; break
				} switch (question_list.q15.answer){
					case 1: result_list.b3++; break
					case 2: result_list.b5++; break
					case 3: result_list.b1++; break
				} switch (question_list.q16.answer){
					case 1: result_list.b6++; break
					case 2: result_list.b1++; break
					case 3: result_list.b3++; break
				} switch (question_list.q17.answer){
					case 1: result_list.b5++; break
					case 2: result_list.b4++; break
					case 3: result_list.b6++; break
				} switch (question_list.q18.answer){
					case 1: result_list.b1++; break
					case 2: result_list.b3++; break
					case 3: result_list.b2++; break
				} switch (question_list.q19.answer){
					case 1: result_list.b5++; break
					case 2: result_list.b6++; break
					case 3: result_list.b3++; break
				} switch (question_list.q20.answer){
					case 1: result_list.b6++; break
					case 2: result_list.b3++; break
					case 3: result_list.b1++; break
				} switch (question_list.q21.answer){
					case 1: result_list.b2++; break
					case 2: result_list.b4++; break
					case 3: result_list.b3++; break
				} switch (question_list.q22.answer){
					case 1: result_list.b3++; break
					case 2: result_list.b2++; break
					case 3: result_list.b4++; break
				} switch (question_list.q23.answer){
					case 1: result_list.b4++; break
					case 2: result_list.b6++; break
					case 3: result_list.b2++; break
				} switch (question_list.q24.answer){
					case 1: result_list.b1++; break
					case 2: result_list.b5++; break
					case 3: result_list.b6++; break
				}

				let best = result_list.b1
				if (result_list.b2 > best) best = result_list.b2
				if (result_list.b3 > best) best = result_list.b3
				if (result_list.b4 > best) best = result_list.b4
				if (result_list.b5 > best) best = result_list.b5
				if (result_list.b6 > best) best = result_list.b6

				let itog = ""

				if (best == result_list.b1) {
					itog += `Склонность к работе с людьми. Профессии, связанные с обслуживанием (бытовым,
					медицинским, информационным), управлением, воспитанием и обучением. Люди, успешные в
					профессиях этой группы, должны уметь и любить общаться, находить общий язык с разными
					людьми, понимать их настроение, намерения и особенности. \n\n\n`
					
						img=document.getElementById('myImg1');
					
						img.style.display='block';
		
				}

				

				if (best == result_list.b2) {
					itog += `Склонность к исследовательской деятельности. Профессии, связанные с научной
				работой. Кроме хорошей теоретической подготовки в определенных областях науки, людям,
				занимающимся исследовательской деятельностью, необходимы такие качества, как
				рациональность, независимость и оригинальность суждений, аналитический склад \n\n\n`
				img=document.getElementById('myImg2');
				img.style.display='block';
				}
				
				
				if (best == result_list.b3){
					itog += `Склонность к работе на производстве. Круг этих профессий очень широк:
					производство и обработка металла; сборка, монтаж приборов и механизмов; ремонт, наладка,
					обслуживание электронного и механического оборудования; монтаж, ремонт зданий,
					конструкций; обработка и использование различных материалов; управление транспортом.
					Профессии этой группы предъявляют повышенные требования к здоровью человека,
					координации движений, вниманию.\n\n\n`
				img=document.getElementById('myImg3');
				img.style.display='block';

				} 

				if (best == result_list.b4){
					itog += `Склонность к эстетическим видам деятельности. Профессии творческого
				характера, связанные с изобразительной, музыкальной, литературно-художественной, актерскосценической деятельностью. Людей творческих профессий, кроме наличия специальных
				способностей (музыкальных, литературных, актерских), отличает оригинальность мышления и
				независимость характера, стремление к совершенству.\n\n\n`
				img=document.getElementById('myImg4');
				img.style.display='block';
				} 

				if (best == result_list.b5){
					itog += `Склонность к экстремальным видам деятельности. Профессии, связанные с
				занятиями спортом, путешествиями, экспедиционной работой, охранной и оперативнорозыскной деятельностью, службой в армии. Все они предъявляют особые требования к
				физической подготовке, здоровью и морально-волевым качествам.\n\n\n`
				img=document.getElementById('myImg5');
				img.style.display='block';
				} 

				if (best == result_list.b6){
					itog += `Склонность к планово-экономическим видам деятельности. Профессии,
				связанные с расчетами и планированием (бухгалтер, экономист); делопроизводством, анализом и
				преобразованием текстов (редактор, переводчик, лингвист); схематическим изображением
				объектов (чертежник, топограф). Эти профессии требуют от человека собранности и
				аккуратности.\n\n\n`
				img=document.getElementById('myImg6');
				img.style.display='block';
				} 

				console.log(itog)
				return itog
			}
		
	/* Code injected by live-server */

	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>