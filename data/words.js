export const WORD_CATEGORIES = [
  {
    id: "ai-community",
    label: "AIコミュニティ・Discord",
  },
  {
    id: "daily-conversation",
    label: "日常・友達との会話",
  },
  {
    id: "class-discussion",
    label: "授業・ディスカッション",
  }
];

export const WORDS = [
  {
    id: 1,
    category: "ai-community",
    meaning: "習熟度、どれくらいツールを使い慣れているか",
    word: "Familiarity",
    reading: "フィミリアリティ",
    patterns: [
      {
        usage: "自分の慣れ具合を言うとき \"I have some familiarity with...\"（〜は多少触ったことがあります）",
        dialogue: [
          {
            english: "Have you ever used OpenAI's tools?",
            japanese: "OpenAIのツール使ったことある？",
            reading: "ハヴ ユー エヴァー ユーズド オープンエーアイズ ツールズ？",
          },
          {
            english: "I have some familiarity with ChatGPT.",
            japanese: "ChatGPTなら多少触ったことあるよ",
            reading: "アイ ハヴ サム フィミリアリティ ウィズ チャットジーピーティー",
          }
        ],
      },
      {
        usage: "全く未経験なとき \"I have no familiarity with...\"（〜は全く分かりません）",
        dialogue: [
          {
            english: "How do you like using Cursor?",
            japanese: "Cursorの使い心地どう？",
            reading: "ハウ ドゥ ユー ライク ユージング カーソル？",
          },
          {
            english: "I have no familiarity with it yet.",
            japanese: "まだ全く触ったことがなくて分からないんだよね",
            reading: "アイ ハヴ ノー フィミリアリティ ウィズ イット イエット",
          }
        ],
      }
    ],
  },
  {
    id: 2,
    category: "ai-community",
    meaning: "（熱心な）ファン、愛好家、オタク",
    word: "Enthusiast",
    reading: "インスージアスト",
    patterns: [
      {
        usage: "自分がハマっているものを言うとき \"I'm an AI enthusiast.\"（私、AIオタクなんだよね）",
        dialogue: [
          {
            english: "How do you know so much about new tools?",
            japanese: "何でそんなに新しいツールに詳しいの？",
            reading: "ハウ ドゥ ユー ノウ ソー マッチ アバウト ニュー ツールズ？",
          },
          {
            english: "I'm an AI enthusiast.",
            japanese: "私、AIツールにめちゃくちゃハマってるんだよね",
            reading: "アイム アン エーアイ エンスージアスト",
          }
        ],
      },
      {
        usage: "相手の熱量に驚いたとき \"You're a real enthusiast!\"（本当好きだね！/ガチ勢だね！）",
        dialogue: [
          {
            english: "I've been researching image-gen prompts every day.",
            japanese: "毎日画像生成プロンプト研究してるんだ",
            reading: "アイヴ ビーン リサーチング イメージジェン プロンプツ エヴリ デイ",
          },
          {
            english: "Wow, you're a real image-gen enthusiast!",
            japanese: "わお、本物の画像生成ガチ勢だね！",
            reading: "ワウ、ユーアー ア リアル イメージジェン エンスージアスト！",
          }
        ],
      }
    ],
  },
  {
    id: 3,
    category: "ai-community",
    meaning: "（プロンプトや設定を）あれこれ微調整する、いじる",
    word: "Tinker",
    reading: "ティンカー",
    patterns: [
      {
        usage: "ちょっといじって試してみたいとき \"I want to tinker with...\"（〜をちょっといじってみたいな）",
        dialogue: [
          {
            english: "Here's the code for the new prompt.",
            japanese: "新しいプロンプトのコードあるよ",
            reading: "ヒアズ ザ コード フォー ザ ニュー プロンプト",
          },
          {
            english: "Let me tinker with it.",
            japanese: "ちょっと自分でもいじって試させて！",
            reading: "レット ミー ティンカー ウィズ イット",
          }
        ],
      },
      {
        usage: "暇つぶしにいじっていたとき \"Just tinkering with...\"（〜をなんとなくいじってただけ）",
        dialogue: [
          {
            english: "What are you doing?",
            japanese: "何してるの？",
            reading: "ワット アー ユー ドゥイング？",
          },
          {
            english: "Just tinkering with my Cursor settings.",
            japanese: "なんとなくCursorの設定をいじくり回してただけだよ",
            reading: "ジャスト ティンカリング ウィズ マイ カーソル セッティングズ",
          }
        ],
      }
    ],
  },
  {
    id: 4,
    category: "ai-community",
    meaning: "AIへの指示文、命令",
    word: "Prompt",
    reading: "プロンプト",
    patterns: [
      {
        usage: "プロンプトを教えてほしいとき \"Can you share your prompt?\"（プロンプト共有してくれない？）",
        dialogue: [
          {
            english: "This image turned out so beautiful!",
            japanese: "この画像、めちゃくちゃ綺麗にできた！",
            reading: "ディス イメージ ターン ド アウト ソー ビューティフル！",
          },
          {
            english: "Looks amazing! Can you share your prompt?",
            japanese: "すごい！なんて言って作ったかプロンプト教えてほしい！",
            reading: "ルックス アメイジング！ キャン ユー シェア ユア プロンプト？",
          }
        ],
      },
      {
        usage: "指示文を考えているとき \"I'm working on a prompt.\"（プロンプトを作っているところ）",
        dialogue: [
          {
            english: "What are you so focused on?",
            japanese: "何集中してるの？",
            reading: "ワット アー ユー ソー フォーカスト オン？",
          },
          {
            english: "I'm working on a prompt for my app.",
            japanese: "アプリ用のプロンプトを練ってるところなんだ",
            reading: "アイム ワーキング オン ア プロンプト フォー マイ アップ",
          }
        ],
      }
    ],
  },
  {
    id: 5,
    category: "ai-community",
    meaning: "（チャットでメンションを飛ばして）通知する、呼ぶ、連絡する",
    word: "Ping",
    reading: "ピング",
    patterns: [
      {
        usage: "あとで連絡してほしいとき \"Ping me when...\"（〜のとき連絡して/呼んで）",
        dialogue: [
          {
            english: "I'll open the Discord room tonight.",
            japanese: "今日の夜、Discordの部屋開くね",
            reading: "アイル オープン ザ ディスコード ルーム トゥナイト",
          },
          {
            english: "Cool. Ping me when you're ready.",
            japanese: "了解、準備できたらメンション飛ばして呼んで！",
            reading: "クール。 ピング ミー ウェン ユーアー レディ",
          }
        ],
      },
      {
        usage: "気軽に連絡してねと言うとき \"Feel free to ping me.\"（気軽に声かけてね）",
        dialogue: [
          {
            english: "What if I don't know how to use Cursor?",
            japanese: "Cursorの使い方、分からなくなったらどうしよう",
            reading: "ワット イフ アイ ドント ノウ ハウ トゥ ユーズ カーソル？",
          },
          {
            english: "Feel free to ping me anytime.",
            japanese: "いつでも気軽にDiscordで呼んでね",
            reading: "フィール フリー トゥ ピング ミー エニタイム",
          }
        ],
      }
    ],
  },
  {
    id: 6,
    category: "daily-conversation",
    meaning: "物の見方、視点、独自の考え方（★私的にはね、と言いたい時）",
    word: "Perspective",
    reading: "パースペクティブ",
    patterns: [
      {
        usage: "自分の意見を切り出すとき \"From my perspective,...\"（私的にはね、〜だと思う）",
        dialogue: [
          {
            english: "Isn't the new assignment too hard?",
            japanese: "新しい課題、難しすぎない？",
            reading: "イズント ザ ニュー アサインメント トゥー ハード？",
          },
          {
            english: "From my perspective, it's actually fun.",
            japanese: "私的には、むしろ結構楽しい気がするけどな",
            reading: "フロム マイ パースペクティヴ、 イッツ アクチュアリー ファン",
          }
        ],
      },
      {
        usage: "相手の考えを褒めるとき \"I like your perspective.\"（その考え方、めっちゃいいね！）",
        dialogue: [
          {
            english: "Shouldn't we simplify the app UI a bit?",
            japanese: "アプリのUI、もっとシンプルにした方が良くない？",
            reading: "シュッドント ウィー シンプリファイ ザ アップ ユーアイ ア ビット？",
          },
          {
            english: "I like your perspective! Let's do that.",
            japanese: "その視点めっちゃいいね！そうしよう！",
            reading: "アイ ライク ユア パースペクティヴ！ レッツ ドゥ ザット",
          }
        ],
      },
      {
        usage: "人それぞれだよねと言うとき \"It depends on your perspective.\"（捉え方次第だよね）",
        dialogue: [
          {
            english: "That professor's class is tough, right?",
            japanese: "あの先生の授業、厳しいよね",
            reading: "ザット プロフェッサーズ クラス イズ タフ, ライト？",
          },
          {
            english: "Yeah, it depends on your perspective.",
            japanese: "まあ、人それぞれの捉え方次第だよね",
            reading: "イェア、 イット ディペンズ オン ユア パースペクティヴ",
          }
        ],
      }
    ],
  },
  {
    id: 7,
    category: "daily-conversation",
    meaning: "（友達と）集まって過ごす、ぶらぶらする、雑談する",
    word: "Hang out",
    reading: "ハングアウト",
    patterns: [
      {
        usage: "フランクに誘いたいとき \"Do you want to hang out?\"（このあと遊ばない？/喋らない？）",
        dialogue: [
          {
            english: "Class is over!",
            japanese: "授業終わったね！",
            reading: "クラス イズ オーヴァー！",
          },
          {
            english: "Do you want to hang out at the cafe?",
            japanese: "このあとカフェでちょっと喋らない？",
            reading: "ドゥ ユー ワント トゥ ハング アウト アット ザ カフェ？",
          }
        ],
      },
      {
        usage: "昨日何してたか言うとき \"I was hanging out with...\"（〜とダラダラ過ごしてた）",
        dialogue: [
          {
            english: "What were you up to yesterday?",
            japanese: "昨日何してたの？",
            reading: "ワット ワー ユー アップ トゥ イエスタデイ？",
          },
          {
            english: "I was just hanging out with my friends.",
            japanese: "友達と集まってなんとなくダラダラ過ごしてたよ",
            reading: "アイ ワズ ジャスト ハンギング アウト ウィズ マイ フレンズ",
          }
        ],
      }
    ],
  },
  {
    id: 8,
    category: "daily-conversation",
    meaning: "（久しぶりに会って）お互いの近況を話し合う",
    word: "Catch up",
    reading: "キャッチアップ",
    patterns: [
      {
        usage: "近況報告し合おうと誘うとき \"We should catch up!\"（近いうち話そうよ！）",
        dialogue: [
          {
            english: "Oh hey! Long time no see!",
            japanese: "あ、久しぶり！全然会えなかったね！",
            reading: "オー ヘイ！ ロング タイム ノー シー！",
          },
          {
            english: "I know! We should catch up over coffee!",
            japanese: "本当だよね！近いうちカフェで近況報告し合おうよ！",
            reading: "アイ ノウ！ ウィー シュッド キャッチ アップ オーヴァー コーヒー！",
          }
        ],
      },
      {
        usage: "最近どうだったか聞くとき \"Let's catch up.\"（色々話聞かせてよ）",
        dialogue: [
          {
            english: "I've been pretty busy lately.",
            japanese: "最近忙しかったんだよね",
            reading: "アイヴ ビーン プリティ ビジー レイタリー",
          },
          {
            english: "Oh really? Let's catch up later!",
            japanese: "マジで？あとでゆっくり話聞かせてよ！",
            reading: "オー リアリー？ レッツ キャッチ アップ レイター！",
          }
        ],
      }
    ],
  },
  {
    id: 9,
    category: "daily-conversation",
    meaning: "まったりする、リラックスする、落ち着く",
    word: "Chill",
    reading: "チル",
    patterns: [
      {
        usage: "今何してるの？への返答 \"Just chilling.\"（まったりしてるだけだよ）",
        dialogue: [
          {
            english: "Where are you right now?",
            japanese: "今どこにいるの？",
            reading: "ウェア アー ユー ライト ナウ？",
          },
          {
            english: "Just chilling in the lounge.",
            japanese: "ラウンジでまったり休憩してるところ",
            reading: "ジャスト チリング イン ザ ラウンジ",
          }
        ],
      },
      {
        usage: "相手を落ち着かせたいとき \"Just chill.\"（まあ落ち着きなよ/リラックスしなよ）",
        dialogue: [
          {
            english: "What if I do badly on the test!",
            japanese: "テストの点数悪かったらどうしよう！",
            reading: "ワット イフ アイ ドゥ バッドリー オン ザ テスト！",
          },
          {
            english: "Just chill, you studied a lot.",
            japanese: "まあ落ち着きなって、あれだけ勉強したんだから",
            reading: "ジャスト チル、 ユー スタディド ア ロット",
          }
        ],
      }
    ],
  },
  {
    id: 10,
    category: "daily-conversation",
    meaning: "（無性に）〜が食べたい、欲する",
    word: "Crave",
    reading: "クレイヴ",
    patterns: [
      {
        usage: "特定のものがどうしても食べたいとき \"I'm craving...\"（無性に〜が食べたい気分！）",
        dialogue: [
          {
            english: "I'm hungry. What should we eat?",
            japanese: "お腹すいたね、何食べる？",
            reading: "アイム ハングリー。 ワット シュッド ウィー イート？",
          },
          {
            english: "I'm craving something sweet, like a donut!",
            japanese: "無性に甘いものが食べたい気分、ドーナツとか！",
            reading: "アイム クレイヴィング サムシング スウィート、 ライク ア ドーナツ！",
          }
        ],
      },
      {
        usage: "ジャンクフードを欲するとき \"I was craving...\"（無性に〜が食べたかったんだよね）",
        dialogue: [
          {
            english: "I had ramen for lunch.",
            japanese: "お昼にラーメン食べたんだ",
            reading: "アイ ハッド ラーメン フォー ランチ",
          },
          {
            english: "Nice. I was craving ramen yesterday too.",
            japanese: "いいね。私も昨日無性にラーメン食べたかったんだよね",
            reading: "ナイス。 アイ ワズ クレイヴィング ラーメン イエスタデイ トゥー",
          }
        ],
      }
    ],
  },
  {
    id: 11,
    category: "daily-conversation",
    meaning: "おごる、ごちそうする",
    word: "Treat",
    reading: "トリート",
    patterns: [
      {
        usage: "自分が男前におごるとき \"My treat.\"（私のおごりね！/ごちそうするよ）",
        dialogue: [
          {
            english: "How much was the coffee?",
            japanese: "コーヒー代いくらだった？",
            reading: "ハウ マッチ ワズ ザ コーヒー？",
          },
          {
            english: "Don't worry, my treat!",
            japanese: "気にしないで、私のおごり！",
            reading: "ドント ウォリー、 マイ トリート！",
          }
        ],
      },
      {
        usage: "相手をお誘いするとき \"I'll treat you to...\"（〜をごちそうするよ）",
        dialogue: [
          {
            english: "Thanks for helping with the app!",
            japanese: "アプリ開発手伝ってくれてありがとう！",
            reading: "サンクス フォー ヘルピング ウィズ ザ アップ！",
          },
          {
            english: "I'll treat you to lunch!",
            japanese: "手伝ってくれてありがとう！ランチおごらせて！",
            reading: "アイル トリート ユー トゥ ランチ！",
          }
        ],
      }
    ],
  },
  {
    id: 12,
    category: "daily-conversation",
    meaning: "（予定や約束を）ドタキャンする（人）",
    word: "Flake",
    reading: "フレイク",
    patterns: [
      {
        usage: "相手が来なかったとき \"He flaked on me.\"（彼にドタキャンされた）",
        dialogue: [
          {
            english: "Isn't Tom coming today?",
            japanese: "今日トムは来ないの？",
            reading: "イズント トム カミング トゥデイ？",
          },
          {
            english: "Yeah, he flaked on me again.",
            japanese: "うん、また彼にドタキャンされちゃった",
            reading: "イェア、 ヒー フレイクド オン ミー アゲイン",
          }
        ],
      },
      {
        usage: "ドタキャン癖がある人を指すとき \"He's a flake.\"（あいつドタキャンばっかりするんだよね）",
        dialogue: [
          {
            english: "We can't reach him for the group project.",
            japanese: "あのグループワーク、彼連絡つかないよ",
            reading: "ウィー キャント リーチ ヒム フォー ザ グループ プロジェクト",
          },
          {
            english: "Don't rely on him, he's a flake.",
            japanese: "彼を当てにしちゃダメ、いつもドタキャンするから",
            reading: "ドント リライ オン ヒム、 ヒーズ ア フレイク",
          }
        ],
      }
    ],
  },
  {
    id: 13,
    category: "daily-conversation",
    meaning: "ドハマりしている、頭から離れない",
    word: "Obsessed",
    reading: "オブセスト",
    patterns: [
      {
        usage: "自分が今大好きなものを言うとき \"I'm obsessed with...\"（〜にガチ恋レベルでハマってる）",
        dialogue: [
          {
            english: "You've only been going to that bakery lately, right?",
            japanese: "最近そのパン屋さんばかり行ってない？",
            reading: "ユーヴ オンリー ビーン ゴーイング トゥ ザット ベイカリー レイタリー, ライト？",
          },
          {
            english: "I'm obsessed with their butter rolls!",
            japanese: "そこの塩バターロールにドハマりしてて頭から離れないの！",
            reading: "アイム オブセスト ウィズ ゼア バターロールズ！",
          }
        ],
      },
      {
        usage: "相手のハマり具合を突っ込むとき \"You're obsessed.\"（本当好きだねー！）",
        dialogue: [
          {
            english: "I use this AI app from morning till night.",
            japanese: "このAIアプリ、起きてから寝るまで使っちゃう",
            reading: "アイ ユーズ ディス エーアイ アップ フロム モーニング ティル ナイト",
          },
          {
            english: "Wow, you're obsessed!",
            japanese: "わお、完全にドハマりしてるね！",
            reading: "ワウ、 ユーアー オブセスト！",
          }
        ],
      }
    ],
  },
  {
    id: 14,
    category: "daily-conversation",
    meaning: "（予定を決めず）その場の思いつきで動く、フットワーク軽い",
    word: "Spontaneous",
    reading: "スポンティニアス",
    patterns: [
      {
        usage: "突発的な旅や予定のとき \"Let's be spontaneous!\"（行き当たりばったりで行こう！）",
        dialogue: [
          {
            english: "Where are we going this weekend? Should we plan?",
            japanese: "週末どこ行く？計画立てる？",
            reading: "ウェア アー ウィー ゴーイング ディス ウィークエンド？ シュッド ウィー プラン？",
          },
          {
            english: "No plans, let's just be spontaneous!",
            japanese: "計画なしで、その場の思いつきで行き当たりばったりで楽しもう！",
            reading: "ノー プランズ、 レッツ ジャスト ビー スポンティニアス！",
          }
        ],
      },
      {
        usage: "自分の性格を言うとき \"I'm spontaneous.\"（私、思い立ったらすぐ動くタイプなんだ）",
        dialogue: [
          {
            english: "Can I randomly ask you to go to a cafe?",
            japanese: "急にカフェ行こうって誘ってもいい？",
            reading: "キャン アイ ランダムリー アスク ユー トゥ ゴー トゥ ア カフェ？",
          },
          {
            english: "Sure! I'm pretty spontaneous.",
            japanese: "もちろん！私フットワーク軽いからいつでも誘って！",
            reading: "シュア！ アイム プリティ スポンティニアス",
          }
        ],
      }
    ],
  },
  {
    id: 15,
    category: "daily-conversation",
    meaning: "絶対に、間違いなく（会話の相槌で超頻出！）",
    word: "Definitely",
    reading: "デフィニットリー",
    patterns: [
      {
        usage: "強い同意の相槌として \"Definitely!\"（本当にその通り！/間違いない！）",
        dialogue: [
          {
            english: "This class has way too much homework, right?",
            japanese: "この授業の課題、多すぎるよね",
            reading: "ディス クラス ハズ ウェイ トゥー マッチ ホームワーク, ライト？",
          },
          {
            english: "Definitely! I can't finish it.",
            japanese: "本当それ！終わるわけないよね",
            reading: "デフィニットリー！ アイ キャント フィニッシュ イット",
          }
        ],
      },
      {
        usage: "予定を確約するとき \"I'll definitely be there.\"（絶対行くよ！）",
        dialogue: [
          {
            english: "Can you come to the after-school hangout today?",
            japanese: "今日の放課後の集まり、来れる？",
            reading: "キャン ユー カム トゥ ザ アフター スクール ハングアウト トゥデイ？",
          },
          {
            english: "Yes, I'll definitely be there!",
            japanese: "うん、絶対行くよ！",
            reading: "イエス、 アイル デフィニットリー ビー ゼア！",
          }
        ],
      }
    ],
  },
  {
    id: 16,
    category: "daily-conversation",
    meaning: "話しかけやすい、親しみやすい雰囲気の人",
    word: "Approachable",
    reading: "アプローチャブル",
    patterns: [
      {
        usage: "あの人話しかけやすそう！のとき \"She looks approachable.\"（優しそう、話しかけやすそう）",
        dialogue: [
          {
            english: "I want to be friends with that girl.",
            japanese: "あの子と友達になりたいな",
            reading: "アイ ワント トゥ ビー フレンズ ウィズ ザット ガール",
          },
          {
            english: "She looks really approachable, just say hi!",
            japanese: "すごく話しかけやすそうな雰囲気だし、挨拶してみなよ！",
            reading: "シー ルックス リアリー アプローチャブル、 ジャスト セイ ハイ！",
          }
        ],
      },
      {
        usage: "先生の印象を言うとき \"The professor is approachable.\"（あの先生はフランクで質問しやすい）",
        dialogue: [
          {
            english: "I'm nervous about going to office hours.",
            japanese: "オフィスアワー（質問時間）行くの緊張する",
            reading: "アイム ナーヴァス アバウト ゴーイング トゥ オフィス アワーズ",
          },
          {
            english: "Don't worry, he's very approachable.",
            japanese: "大丈夫、あの先生めっちゃフランクで優しいから",
            reading: "ドント ウォリー、 ヒーズ ヴェリー アプローチャブル",
          }
        ],
      }
    ],
  },
  {
    id: 17,
    category: "daily-conversation",
    meaning: "クタクタに疲れた（tiredより10倍疲れてるリアルな表現）",
    word: "Exhausted",
    reading: "イクゾースティッド",
    patterns: [
      {
        usage: "限界まで疲れたとき \"I'm exhausted.\"（もうクタクタで限界…）",
        dialogue: [
          {
            english: "How did your presentation go today?",
            japanese: "今日のプレゼンどうだった？",
            reading: "ハウ ディド ユア プレゼンテーション ゴー トゥデイ？",
          },
          {
            english: "It went well, but I'm exhausted.",
            japanese: "上手くいったけど、もうクタクタで力尽きた…",
            reading: "イット ウェント ウェル、 バット アイム イグゾースティッド",
          }
        ],
      },
      {
        usage: "徹夜明けなどのとき \"You look exhausted.\"（めちゃくちゃ疲れた顔してるよ）",
        dialogue: [
          {
            english: "I stayed up all night on homework yesterday.",
            japanese: "昨日、課題で一晩中起きてたんだ",
            reading: "アイ ステイド アップ オール ナイト オン ホームワーク イエスタデイ",
          },
          {
            english: "Oh no, you look exhausted!",
            japanese: "うわあ、めちゃくちゃ疲れた顔してるよ！早く寝て！",
            reading: "オー ノー、 ユー ルック イグゾースティッド！",
          }
        ],
      }
    ],
  },
  {
    id: 18,
    category: "daily-conversation",
    meaning: "（宿題や仕事を）後回しにする、先延ばしにする",
    word: "Procrastinate",
    reading: "プロクラスティネイト",
    patterns: [
      {
        usage: "ついやっちゃう自虐として \"I always procrastinate.\"（いつもギリギリまで後回しにしちゃう）",
        dialogue: [
          {
            english: "Did you finish the report?",
            japanese: "レポートもう終わった？",
            reading: "ディド ユー フィニッシュ ザ レポート？",
          },
          {
            english: "No, I always procrastinate until the last minute.",
            japanese: "ううん、いつも最後の最後まで後回しにしちゃうんだよね",
            reading: "ノー、 アイ オールウェイズ プロクラスティネイト アンティル ザ ラスト ミニット",
          }
        ],
      },
      {
        usage: "やめなきゃと思っているとき \"Stop procrastinating.\"（後回しにするのやめなきゃ）",
        dialogue: [
          {
            english: "I keep watching YouTube...",
            japanese: "YouTube見ちゃう…",
            reading: "アイ キープ ウォッチング ユーチューブ...",
          },
          {
            english: "Stop procrastinating and let's study!",
            japanese: "後回しにするのやめて、さあ勉強しよ！",
            reading: "ストップ プロクラスティネイティング アンド レッツ スタディ！",
          }
        ],
      }
    ],
  },
  {
    id: 19,
    category: "daily-conversation",
    meaning: "（テスト前に）詰め込み勉強をする、一夜漬けする",
    word: "Cram",
    reading: "クラム",
    patterns: [
      {
        usage: "今夜は徹夜で詰め込むぞ！のとき \"I need to cram for...\"（〜のために一夜漬けしなきゃ）",
        dialogue: [
          {
            english: "We have a community class test tomorrow.",
            japanese: "明日、コミュニティの授業のテストだよ",
            reading: "ウィー ハヴ ア コミュニティ クラス テスト トゥモロー",
          },
          {
            english: "Oh no, I need to cram for it tonight!",
            japanese: "やばい、今夜徹夜で頭に詰め込まなきゃ！",
            reading: "オー ノー、 アイ ニード トゥ クラム フォー イット トゥナイト！",
          }
        ],
      },
      {
        usage: "一夜漬けはダメだよと言うとき \"Don't cram.\"（詰め込みは良くないよ）",
        dialogue: [
          {
            english: "I only study the day before every test.",
            japanese: "毎回テスト前日しか勉強しないんだ",
            reading: "アイ オンリー スタディ ザ デイ ビフォー エヴリ テスト",
          },
          {
            english: "You shouldn't cram every time!",
            japanese: "毎回一夜漬けにするのは良くないって！",
            reading: "ユー シュッドント クラム エヴリ タイム！",
          }
        ],
      }
    ],
  },
  {
    id: 20,
    category: "daily-conversation",
    meaning: "偶然の一致、まさか（「奇遇だね！」「偶然だね！」）",
    word: "Coincidence",
    reading: "コインシデンス",
    patterns: [
      {
        usage: "街やカフェでばったり会ったとき \"What a coincidence!\"（なんて偶然！/奇遇だね！）",
        dialogue: [
          {
            english: "Hey! What are you doing here?",
            japanese: "あれ！こんなところで何してるの？",
            reading: "ヘイ！ ワット アー ユー ドゥイング ヒア？",
          },
          {
            english: "Oh, hi! What a coincidence!",
            japanese: "あれ、おーい！すごい偶然だね！",
            reading: "オー、 ハイ！ ワット ア コインシデンス！",
          }
        ],
      },
      {
        usage: "予定や好みが同じだったとき \"It's a coincidence.\"（偶然だね）",
        dialogue: [
          {
            english: "I just downloaded that AI tool yesterday too!",
            japanese: "私もそのAIツール、昨日ダウンロードしたところ！",
            reading: "アイ ジャスト ダウンローデッド ザット エーアイ ツール イエスタデイ トゥー！",
          },
          {
            english: "Really? That's a crazy coincidence!",
            japanese: "本当に？ものすごい偶然だね！",
            reading: "リアリー？ ザッツ ア クレイジー コインシデンス！",
          }
        ],
      }
    ],
  },
  {
    id: 21,
    category: "ai-community",
    meaning: "画像生成（AIの画像制作機能の略称）",
    word: "Image-gen",
    reading: "イメージジェン",
    patterns: [
      {
        usage: "画像生成を試しているとき \"I'm trying out image-gen.\"（画像生成を試してるところ）",
        dialogue: [
          {
            english: "How did you make that beautiful image?",
            japanese: "その綺麗な画像どうしたの？",
            reading: "ハウ ディド ユー メイク ザット ビューティフル イメージ？",
          },
          {
            english: "I'm trying out this new image-gen tool.",
            japanese: "この新しい画像生成ツールを試して作ってみたんだ",
            reading: "アイム トライイング アウト ディス ニュー イメージジェン ツール",
          }
        ],
      },
      {
        usage: "画像生成のコツを聞くとき \"Any tips for image-gen?\"（画像生成のコツとかある？）",
        dialogue: [
          {
            english: "I want to make more realistic images.",
            japanese: "もっとリアルな画像にしたいな",
            reading: "アイ ワント トゥ メイク モア リアリスティック イメージズ",
          },
          {
            english: "Any tips for image-gen prompts?",
            japanese: "画像生成のプロンプトで何かコツってある？",
            reading: "エニ ティップス フォー イメージジェン プロンプツ？",
          }
        ],
      }
    ],
  },
  {
    id: 22,
    category: "ai-community",
    meaning: "バグ、システムの一時的な不具合",
    word: "Glitch",
    reading: "グリッチ",
    patterns: [
      {
        usage: "画面がおかしいとき \"There's a glitch.\"（バグってる、不具合がある）",
        dialogue: [
          {
            english: "The button won't work when I press it.",
            japanese: "ボタン押しても動かないんだけど",
            reading: "ザ ボタン ウォント ワーク ウェン アイ プレス イット",
          },
          {
            english: "Maybe there's a glitch in the app.",
            japanese: "アプリのバグか何かかもね",
            reading: "メイビー ゼアズ ア グリッチ イン ザ アップ",
          }
        ],
      },
      {
        usage: "一時的なものだと言うとき \"It's just a temporary glitch.\"（ただの一時的なエラーだよ）",
        dialogue: [
          {
            english: "Did my data get deleted?",
            japanese: "データ消えちゃったかな？",
            reading: "ディド マイ データ ゲット デリーテッド？",
          },
          {
            english: "Don't worry, it's just a temporary glitch.",
            japanese: "大丈夫、ただの一時的なシステムエラーだよ",
            reading: "ドント ウォリー、 イッツ ジャスト ア テンポラリー グリッチ",
          }
        ],
      }
    ],
  },
  {
    id: 23,
    category: "ai-community",
    meaning: "人工知能モデルなどの「生成物」や「出力」",
    word: "Output",
    reading: "アウトプット",
    patterns: [
      {
        usage: "AIの返答の質を言うとき \"The output is...\"（出力結果が〜）",
        dialogue: [
          {
            english: "What happened when you changed the prompt?",
            japanese: "プロンプト変えたらどうなった？",
            reading: "ワット ハプンド ウェン ユー チェンジド ザ プロンプト？",
          },
          {
            english: "The output is much better now!",
            japanese: "出力結果がさっきよりずっと良くなったよ！",
            reading: "ザ アウトプット イズ マッチ ベター ナウ！",
          }
        ],
      },
      {
        usage: "結果を確認してほしいとき \"Check the output.\"（出力を見てみて）",
        dialogue: [
          {
            english: "Cursor wrote the code for me.",
            japanese: "Cursorがコード書いてくれたよ",
            reading: "カーソル ロート ザ コード フォー ミー",
          },
          {
            english: "Let me check the output.",
            japanese: "どれどれ、出力されたコードを見てみせて",
            reading: "レット ミー チェック ザ アウトプット",
          }
        ],
      }
    ],
  },
  {
    id: 24,
    category: "ai-community",
    meaning: "最新機能などの「一般公開」、「リリース」",
    word: "Public release",
    reading: "パブリック リリース",
    patterns: [
      {
        usage: "一般公開を待っているとき \"Waiting for the public release.\"（一般公開を待ってるんだ）",
        dialogue: [
          {
            english: "Can we use that new AI feature yet?",
            japanese: "あの新しいAI機能、もう使えるの？",
            reading: "キャン ウィー ユーズ ザット ニュー エーアイ フィーチャー イエット？",
          },
          {
            english: "Not yet, I'm waiting for the public release.",
            japanese: "まだ使えないよ、一般公開されるのを待ってるところ",
            reading: "ナット イエット、 アイム ウェイティング フォー ザ パブリック リリース",
          }
        ],
      },
      {
        usage: "ついに公開されたとき \"It's finally out for public release!\"（ついに一般公開されたよ！）",
        dialogue: [
          {
            english: "That new feature is available now, huh?",
            japanese: "例の新機能、使えるようになったね",
            reading: "ザット ニュー フィーチャー イズ アヴェイラブル ナウ, ハ？",
          },
          {
            english: "Yeah, it's finally out for public release!",
            japanese: "うん、ついに一般公開で誰でも使えるようになったね！",
            reading: "イェア、 イッツ ファイナリー アウト フォー パブリック リリース！",
          }
        ],
      }
    ],
  },
  {
    id: 25,
    category: "ai-community",
    meaning: "（機能や設定の）微調整、チューニング",
    word: "Tweaking",
    reading: "トウィーキング",
    patterns: [
      {
        usage: "少し修正しているとき \"Just tweaking...\"（ちょっと微調整してるところ）",
        dialogue: [
          {
            english: "Are you still fixing the code?",
            japanese: "まだコード直してるの？",
            reading: "アー ユー スティル フィクシング ザ コード？",
          },
          {
            english: "Yeah, just tweaking the UI a little bit.",
            japanese: "うん、ちょっと見た目のデザインを微調整してるところ",
            reading: "イェア、 ジャスト トウィーキング ザ ユーアイ ア リトル ビット",
          }
        ],
      },
      {
        usage: "調整が必要だと言うとき \"It needs some tweaking.\"（少し微調整が必要だね）",
        dialogue: [
          {
            english: "Will the app work with this?",
            japanese: "これでアプリ動くかな？",
            reading: "ウィル ザ アップ ワーク ウィズ ディス？",
          },
          {
            english: "It's good, but it needs some tweaking.",
            japanese: "いい感じだけど、まだ少し微調整が必要そうだね",
            reading: "イッツ グッド、 バット イット ニーズ サム トウィーキング",
          }
        ],
      }
    ],
  },
  {
    id: 26,
    category: "ai-community",
    meaning: "最先端の、最新鋭の（AI界隈のニュースで超頻出）",
    word: "State-of-the-art",
    reading: "ステイト オブ ジ アート",
    patterns: [
      {
        usage: "最先端の技術だと褒めるとき \"It's state-of-the-art.\"（これ最先端のやつだよ）",
        dialogue: [
          {
            english: "Isn't this AI's response speed insane?",
            japanese: "このAIの回答スピード、ヤバくない？",
            reading: "イズント ディス エーアイズ レスポンス スピード インセイン？",
          },
          {
            english: "Yeah, they use a state-of-the-art model.",
            japanese: "本当それ、最先端のモデルを使ってるからね",
            reading: "イェア、 ゼイ ユーズ ア ステイトオブザアート モデル",
          }
        ],
      },
      {
        usage: "最新のテクノロジーについて話すとき \"State-of-the-art technology\"（最先端のテクノロジー）",
        dialogue: [
          {
            english: "What kind of app do you want to build in the future?",
            japanese: "将来どんなアプリ作ってみたい？",
            reading: "ワット カインド オブ アップ ドゥ ユー ワント トゥ ビルド イン ザ フューチャー？",
          },
          {
            english: "I want to build something using state-of-the-art tech!",
            japanese: "最先端の技術を使った何かを作ってみたいな！",
            reading: "アイ ワント トゥ ビルド サムシング ユージング ステイトオブザアート テック！",
          }
        ],
      }
    ],
  },
  {
    id: 27,
    category: "class-discussion",
    meaning: "意見、評価、アドバイス（★日常でも「感想教えて！」で超使う）",
    word: "Feedback",
    reading: "フィードバック",
    patterns: [
      {
        usage: "意見を聞きたいとき \"Give me some feedback.\"（感想やアドバイスをちょうだい）",
        dialogue: [
          {
            english: "What do you think of this pamphlet design?",
            japanese: "このパンフレットのデザインどうかな？",
            reading: "ワット ドゥ ユー シンク オブ ディス パンフレット デザイン？",
          },
          {
            english: "Looks nice! Let me give you some feedback.",
            japanese: "いいね！ちょっと感想伝えてもいい？",
            reading: "ルックス ナイス！ レット ミー ギヴ ユー サム フィードバック",
          }
        ],
      },
      {
        usage: "アドバイスをくれて感謝するとき \"Thanks for the feedback.\"（意見をありがとう！）",
        dialogue: [
          {
            english: "You'll make it better if you fix this part.",
            japanese: "ここを直すともっと良くなるよ",
            reading: "ユール メイク イット ベター イフ ユー フィックス ディス パート",
          },
          {
            english: "Thanks for the feedback, that helps!",
            japanese: "アドバイスありがとう、助かる！",
            reading: "サンクス フォー ザ フィードバック、 ザット ヘルプス！",
          }
        ],
      }
    ],
  },
  {
    id: 28,
    category: "class-discussion",
    meaning: "具体的な（★会話で「もっと詳しく！具体的に言って！」という時）",
    word: "Concrete",
    reading: "コンクリート",
    patterns: [
      {
        usage: "具体的な例がほしいとき \"Can you give me a concrete example?\"（具体的な例を出してくれる？）",
        dialogue: [
          {
            english: "Let's make the app simpler.",
            japanese: "もっと簡単なアプリにしようよ",
            reading: "レッツ メイク ザ アップ シンプラー",
          },
          {
            english: "Can you give me a concrete example?",
            japanese: "例えばどんな感じか、具体的な例を出して教えてくれる？",
            reading: "キャン ユー ギヴ ミー ア コンクリート エグザンプル？",
          }
        ],
      },
      {
        usage: "計画がはっきりしているとき \"Concrete plan\"（具体的な計画）",
        dialogue: [
          {
            english: "Did you decide what to do this weekend?",
            japanese: "週末何するか決まった？",
            reading: "ディド ユー ディサイド ワット トゥ ドゥ ディス ウィークエンド？",
          },
          {
            english: "No concrete plan yet, we'll see!",
            japanese: "まだ具体的な計画はないよ、その場で決めよう！",
            reading: "ノー コンクリート プラン イエット、 ウィール シー！",
          }
        ],
      }
    ],
  },
  {
    id: 29,
    category: "class-discussion",
    meaning: "関連性のある、今の話に関係がある",
    word: "Relevant",
    reading: "レレバント",
    patterns: [
      {
        usage: "今の話に関係あるよと言うとき \"It's relevant to...\"（〜に関係があるよ）",
        dialogue: [
          {
            english: "Why did you bring that up?",
            japanese: "なんで今の話したの？",
            reading: "ワイ ディド ユー ブリング ザット アップ？",
          },
          {
            english: "Because it's relevant to our assignment.",
            japanese: "だって今の、私たちの宿題にめちゃくちゃ関係がある話だからだよ",
            reading: "ビコーズ イッツ レレバント トゥ アワ アサインメント",
          }
        ],
      },
      {
        usage: "関係ない話を遮るとき \"That's not relevant.\"（それ今の話に関係なくない？）",
        dialogue: [
          {
            english: "Oh, by the way, what should we have for dinner tonight?",
            japanese: "あ、そういえば今日の晩ご飯何にする？",
            reading: "オー, バイ ザ ウェイ, ワット シュッド ウィー ハヴ フォー ディナー トゥナイト？",
          },
          {
            english: "Hey, that's not relevant right now!",
            japanese: "ちょっと、それ今のディスカッションに関係ないじゃん！笑",
            reading: "ヘイ、 ザッツ ナット レレバント ライト ナウ！",
          }
        ],
      }
    ],
  },
  {
    id: 30,
    category: "class-discussion",
    meaning: "（意味を）明確にする、分かりやすく説明し直す（★聞き返したい時に超便利）",
    word: "Clarify",
    reading: "クラリファイ",
    patterns: [
      {
        usage: "もう一度説明してほしいとき \"Can you clarify that?\"（今のところ、もうちょっと分かりやすく言ってくれる？）",
        dialogue: [
          {
            english: "About tomorrow's meeting spot, actually over there...",
            japanese: "明日の集合場所なんだけど、やっぱりあそこで…",
            reading: "アバウト トゥモローズ ミーティング スポット, アクチュアリー オーヴァー ゼア...",
          },
          {
            english: "Wait, can you clarify that? Where exactly?",
            japanese: "待って、ちょっとはっきりさせてくれる？結局どこに集合？",
            reading: "ウェイト、 キャン ユー クラリファイ ザット？ ウェア エグザクトリー？",
          }
        ],
      },
      {
        usage: "自分の言葉を言い直すとき \"Let me clarify.\"（誤解のないように言うとね、説明し直すとね）",
        dialogue: [
          {
            english: "Are you mad at me?",
            japanese: "怒ってるの？",
            reading: "アー ユー マッド アット ミー？",
          },
          {
            english: "No! Let me clarify. I'm just tired.",
            japanese: "違う違う！言い直させて、怒ってなくてただ眠いだけ！",
            reading: "ノー！ レット ミー クラリファイ。 アイム ジャスト タイアード",
          }
        ],
      }
    ],
  },
  {
    id: 31,
    category: "class-discussion",
    meaning: "深い理解、鋭い洞察（★相手が良いことを言ったときに「深いね！」と褒める）",
    word: "Insight",
    reading: "インサイト",
    patterns: [
      {
        usage: "相手の意見を褒めるとき \"Great insight!\"（素晴らしい視点だね！/深いね！）",
        dialogue: [
          {
            english: "I think this app would be easier for elderly people to use.",
            japanese: "このアプリは高齢者の方が使いやすいと思うんだ",
            reading: "アイ シンク ディス アップ ウッド ビー イージアー フォー エルダーリー ピープル トゥ ユーズ",
          },
          {
            english: "Wow, great insight!",
            japanese: "わお、素晴らしい視点だね！",
            reading: "ワウ、 グレート インサイト！",
          }
        ],
      },
      {
        usage: "新しい気づきを得たとき \"Give me some insight.\"（アドバイスやヒントをちょうだい）",
        dialogue: [
          {
            english: "I can't write good prompts.",
            japanese: "プロンプトがうまく作れないんだ",
            reading: "アイ キャント ライト グッド プロンプツ",
          },
          {
            english: "Let me give you some insight into that.",
            japanese: "それについてちょっとヒントをあげるよ",
            reading: "レット ミー ギヴ ユー サム インサイト イントゥ ザット",
          }
        ],
      }
    ],
  },
  {
    id: 32,
    category: "class-discussion",
    meaning: "講義概要、授業のスケジュール計画表",
    word: "Syllabus",
    reading: "シラバス",
    patterns: [
      {
        usage: "シラバスを確認するとき \"Check the syllabus.\"（シラバスを見てみて）",
        dialogue: [
          {
            english: "When's the next test again?",
            japanese: "次のテストっていつだっけ？",
            reading: "ウェンズ ザ ネクスト テスト アゲイン？",
          },
          {
            english: "Just check the syllabus, it's on there.",
            japanese: "シラバスチェックしてみて、そこに書いてあるよ",
            reading: "ジャスト チェック ザ シラバス、 イッツ オン ゼア",
          }
        ],
      },
      {
        usage: "最初の授業のとき \"Syllabus day\"（シラバスを読むだけの初日の授業）",
        dialogue: [
          {
            english: "Is class already over today?",
            japanese: "今日の授業、もう終わったの？",
            reading: "イズ クラス アルレディ オーヴァー トゥデイ？",
          },
          {
            english: "Yeah, it was just a syllabus day.",
            japanese: "うん、今日はシラバス読むだけの日だったからすぐ終わったよ",
            reading: "イェア、 イット ワズ ジャスト ア シラバス デイ",
          }
        ],
      }
    ],
  },
  {
    id: 33,
    category: "class-discussion",
    meaning: "宿題、課題（★Homeworkよりカレッジではこっちが主流）",
    word: "Assignment",
    reading: "アサインメント",
    patterns: [
      {
        usage: "宿題があるか聞くとき \"Do we have an assignment?\"（宿題出てたっけ？）",
        dialogue: [
          {
            english: "What was the homework for today's class?",
            japanese: "今日の授業の宿題って何だっけ？",
            reading: "ワット ワズ ザ ホームワーク フォー トゥデイズ クラス？",
          },
          {
            english: "Do we have an assignment? I forgot.",
            japanese: "宿題出てたっけ？忘れちゃった",
            reading: "ドゥ ウィー ハヴ アン アサインメント？ アイ フォーガット",
          }
        ],
      },
      {
        usage: "課題が終わらないとき \"Working on an assignment.\"（課題をやってる最中）",
        dialogue: [
          {
            english: "Can you hang out tonight?",
            japanese: "今夜遊べる？",
            reading: "キャン ユー ハング アウト トゥナイト？",
          },
          {
            english: "Sorry, I'm working on a huge assignment.",
            japanese: "ごめん、デカい課題をやってる最中で無理そうだわ",
            reading: "ソーリー、 アイム ワーキング オン ア ヒュージ アサインメント",
          }
        ],
      }
    ],
  },
  {
    id: 34,
    category: "class-discussion",
    meaning: "（課題などの）提出期限、締め切り",
    word: "Due",
    reading: "デュー",
    patterns: [
      {
        usage: "期限がいつか聞くとき \"When is it due?\"（締め切りいつ？）",
        dialogue: [
          {
            english: "I need to write my English essay.",
            japanese: "英語のエッセイ書かなきゃ",
            reading: "アイ ニード トゥ ライト マイ イングリッシュ エッセイ",
          },
          {
            english: "When is it due?",
            japanese: "締め切りいつまでなの？",
            reading: "ウェン イズ イット デュー？",
          }
        ],
      },
      {
        usage: "今日が締め切りのとき \"It's due today.\"（今日が提出期限だよ）",
        dialogue: [
          {
            english: "I forgot about that report!",
            japanese: "あのレポート忘れてた！",
            reading: "アイ フォーガット アバウト ザット レポート！",
          },
          {
            english: "Hurry up, it's due today by midnight!",
            japanese: "急いで！今日の夜中までが期限だよ！",
            reading: "ハリー アップ、 イッツ デュー トゥデイ バイ ミッドナイト！",
          }
        ],
      }
    ],
  },
  {
    id: 35,
    category: "class-discussion",
    meaning: "通学する、通勤する",
    word: "Commute",
    reading: "コミュート",
    patterns: [
      {
        usage: "通学時間を言うとき \"My commute is...\"（通学時間は〜です）",
        dialogue: [
          {
            english: "Is your school far?",
            japanese: "学校遠いの？",
            reading: "イズ ユア スクール ファー？",
          },
          {
            english: "Yeah, my commute is about an hour.",
            japanese: "うん、通学に1時間くらいかかるんだよね",
            reading: "イェア、 マイ コミュート イズ アバウト アン アワー",
          }
        ],
      },
      {
        usage: "通学がしんどいとき \"Long commute\"（通学が長い・大変）",
        dialogue: [
          {
            english: "First period every day is rough, right?",
            japanese: "毎日1限の授業辛いよね",
            reading: "ファースト ピリオド エヴリ デイ イズ ラフ, ライト？",
          },
          {
            english: "I hate this long commute.",
            japanese: "この長い通学時間が本当に嫌になっちゃう",
            reading: "アイ ヘイト ディス ロング コミュート",
          }
        ],
      }
    ],
  },
  {
    id: 36,
    category: "class-discussion",
    meaning: "他の人との交流、相互作用",
    word: "Interaction",
    reading: "インタラクション",
    patterns: [
      {
        usage: "人と話す機会がほしいとき \"More interaction\"（もっと交流がほしい）",
        dialogue: [
          {
            english: "How's online class?",
            japanese: "オンライン授業どう？",
            reading: "ハウズ オンライン クラス？",
          },
          {
            english: "I like it, but I need more interaction with classmates.",
            japanese: "いいんだけど、もっとクラスメイトとの交流が欲しいな",
            reading: "アイ ライク イット、 バット アイ ニード モア インタラクション ウィズ クラスメイツ",
          }
        ],
      },
      {
        usage: "楽しい交流だったとき \"Good interaction\"（良い交流、楽しいやり取り）",
        dialogue: [
          {
            english: "Today's group work was fun, huh?",
            japanese: "今日のグループワーク楽しかったね",
            reading: "トゥデイズ グループ ワーク ワズ ファン, ハ？",
          },
          {
            english: "Yeah, it was a really good interaction.",
            japanese: "うん、本当に良い交流ができたよね",
            reading: "イェア、 イット ワズ ア リアリー グッド インタラクション",
          }
        ],
      }
    ],
  },
  {
    id: 37,
    category: "class-discussion",
    meaning: "協力的な、みんなで一緒にやる",
    word: "Collaborative",
    reading: "コラボレイティブ",
    patterns: [
      {
        usage: "共同作業の楽しさを言うとき \"Collaborative project\"（共同プロジェクト）",
        dialogue: [
          {
            english: "Did everyone work together on this app?",
            japanese: "このアプリ、みんなで作ったの？",
            reading: "ディド エヴリワン ワーク トゥゲザー オン ディス アップ？",
          },
          {
            english: "Yes, it was a collaborative project.",
            japanese: "うん、みんなで協力して作ったプロジェクトなんだ",
            reading: "イエス、 イット ワズ ア コラボレイティヴ プロジェクト",
          }
        ],
      },
      {
        usage: "みんなでやろうよと言うとき \"Let's be collaborative.\"（みんなで協力し合おう）",
        dialogue: [
          {
            english: "This assignment is tough to do alone.",
            japanese: "課題、一人でやるのきついな",
            reading: "ディス アサインメント イズ タフ トゥ ドゥ アローン",
          },
          {
            english: "Let's be collaborative and work together!",
            japanese: "みんなで協力して一緒にやろうよ！",
            reading: "レッツ ビー コラボレイティヴ アンド ワーク トゥゲザー！",
          }
        ],
      }
    ],
  },
  {
    id: 38,
    category: "class-discussion",
    meaning: "（お互いの作品や課題を）批評する、アドバイスし合う",
    word: "Critique",
    reading: "クリティーク",
    patterns: [
      {
        usage: "作品を見てアドバイスしてほしいとき \"Critique my work.\"（私の作品にアドバイスして！）",
        dialogue: [
          {
            english: "I tried making a new design.",
            japanese: "新しいデザイン作ってみたんだ",
            reading: "アイ トライド メイキング ア ニュー デザイン",
          },
          {
            english: "Let me critique your work!",
            japanese: "どれどれ、アドバイスさせて！",
            reading: "レット ミー クリティーク ユア ワーク！",
          }
        ],
      },
      {
        usage: "授業での講評会のとき \"Critique session\"（講評会、アドバイスし合う時間）",
        dialogue: [
          {
            english: "What are we doing in the next class?",
            japanese: "次の授業は何するの？",
            reading: "ワット アー ウィー ドゥイング イン ザ ネクスト クラス？",
          },
          {
            english: "We have a critique session for our photos.",
            japanese: "写真課題の講評会があるんだよね",
            reading: "ウィー ハヴ ア クリティーク セッション フォー アワ フォートス",
          }
        ],
      }
    ],
  },
  {
    id: 39,
    category: "class-discussion",
    meaning: "アイデアを出し合う、ブレストする",
    word: "Brainstorm",
    reading: "ブレインストーム",
    patterns: [
      {
        usage: "アイデア出しをしようと誘うとき \"Let's brainstorm!\"（アイデア出し合おう！）",
        dialogue: [
          {
            english: "I can't think of an idea for the app.",
            japanese: "アプリのネタが思いつかないよ",
            reading: "アイ キャント シンク オブ アン アイデア フォー ザ アップ",
          },
          {
            english: "Let's brainstorm together at the cafe!",
            japanese: "カフェで一緒にアイデア出し合おうよ！",
            reading: "レッツ ブレインストーム トゥゲザー アット ザ カフェ！",
          }
        ],
      },
      {
        usage: "良い案を考えているとき \"Brainstorming some ideas.\"（アイデアを練ってるところ）",
        dialogue: [
          {
            english: "What are you writing notes about?",
            japanese: "何メモしてるの？",
            reading: "ワット アー ユー ライティング ノーツ アバウト？",
          },
          {
            english: "Just brainstorming some ideas for my YouTube shorts.",
            japanese: "YouTubeショートのネタをブレストしてるところだよ",
            reading: "ジャスト ブレインストーミング サム アイデアズ フォー マイ ユーチューブ ショーツ",
          }
        ],
      }
    ],
  },
  {
    id: 40,
    category: "class-discussion",
    meaning: "（相手の意見に）矛盾する、反論する",
    word: "Contradict",
    reading: "コントラディクト",
    patterns: [
      {
        usage: "話が矛盾してない？というとき \"It contradicts...\"（それ、〜と矛盾してない？）",
        dialogue: [
          {
            english: "He's saying something different from before.",
            japanese: "彼はさっきと違うこと言ってるよ",
            reading: "ヒーズ セイイング サムシング ディファレント フロム ビフォー",
          },
          {
            english: "Yeah, it contradicts what he said earlier.",
            japanese: "本当だね、さっき彼が言ってたことと矛盾してるよね",
            reading: "イェア、 イット コントラディクツ ワット ヒー セッド アーリアー",
          }
        ],
      },
      {
        usage: "反論するつもりはないけど、と言うとき \"I don't mean to contradict you...\"（反論するわけじゃないんだけどね…）",
        dialogue: [
          {
            english: "This is the best way to do it.",
            japanese: "このやり方が一番だよ",
            reading: "ディス イズ ザ ベスト ウェイ トゥ ドゥ イット",
          },
          {
            english: "I don't mean to contradict you, but there's an easier way.",
            japanese: "反論するわけじゃないんだけど、もっと簡単な方法もあるよ",
            reading: "アイ ドント ミーン トゥ コントラディクト ユー、 バット ゼアズ アン イージアー ウェイ",
          }
        ],
      }
    ],
  },
  {
    id: 41,
    category: "daily-conversation",
    meaning: "おすすめ、一押し",
    word: "Recommendation",
    reading: "レコメンデーション",
    patterns: [
      {
        usage: "おすすめを聞くとき \"Any recommendations?\"（おすすめ何かある？）",
        dialogue: [
          {
            english: "It's my first time at this cafe.",
            japanese: "このカフェ初めて来たんだ",
            reading: "イッツ マイ ファースト タイム アット ディス カフェ",
          },
          {
            english: "Any recommendations for lunch?",
            japanese: "ランチのおすすめ何かある？",
            reading: "エニ レコメンデーションズ フォー ランチ？",
          }
        ],
      },
      {
        usage: "自分のおすすめを教えるとき \"My recommendation is...\"（私のおすすめは〜だよ）",
        dialogue: [
          {
            english: "Which AI tool do you recommend?",
            japanese: "どのAIツールがおすすめ？",
            reading: "ウィッチ エーアイ ツール ドゥ ユー レコメンド？",
          },
          {
            english: "My recommendation is Cursor, definitely!",
            japanese: "私のおすすめは間違いなくCursorだよ！",
            reading: "マイ レコメンデーション イズ カーソル、 デフィニットリー！",
          }
        ],
      }
    ],
  },
  {
    id: 42,
    category: "daily-conversation",
    meaning: "雰囲気（★カフェやお店、部屋の空気が良いときに超頻出）",
    word: "Atmosphere",
    reading: "アトモスフィア",
    patterns: [
      {
        usage: "お店の雰囲気を褒めるとき \"I love the atmosphere.\"（この雰囲気めっちゃ好き！）",
        dialogue: [
          {
            english: "This cafe feels really comfortable.",
            japanese: "このカフェ、居心地がいいね",
            reading: "ディス カフェ フィールズ リアリー コンフォータブル",
          },
          {
            english: "Yeah, I love the atmosphere here.",
            japanese: "ね、ここの雰囲気めっちゃ好きだわ",
            reading: "イェア、 アイ ラヴ ザ アトモスフィア ヒア",
          }
        ],
      },
      {
        usage: "緊張感があるとき \"Tense atmosphere\"（ピリピリした雰囲気）",
        dialogue: [
          {
            english: "The classroom felt scary during the test.",
            japanese: "テスト中の教室、怖かったね",
            reading: "ザ クラスルーム フェルト スケアリー デューリング ザ テスト",
          },
          {
            english: "It was a very tense atmosphere.",
            japanese: "すごいピリピリした雰囲気だったよね",
            reading: "イット ワズ ア ヴェリー テンス アトモスフィア",
          }
        ],
      }
    ],
  },
  {
    id: 43,
    category: "daily-conversation",
    meaning: "大げさに言う、誇張する（★友達が話を盛ったときにツッコミで大活躍）",
    word: "Exaggerate",
    reading: "イグザジェレイト",
    patterns: [
      {
        usage: "話盛ってない？と突っ込むとき \"You're exaggerating!\"（大げさに言ってるでしょ！/話盛ったでしょ！笑）",
        dialogue: [
          {
            english: "I have like a mountain of homework, it'll take 100 hours.",
            japanese: "課題が山ほどあって100時間くらいかかりそう",
            reading: "アイ ハヴ ライク ア マウンテン オブ ホームワーク, イットル テイク 100 アワーズ",
          },
          {
            english: "You're exaggerating! It's not that bad.",
            japanese: "大げさに言いすぎ！そこまでじゃないって！笑",
            reading: "ユーアー イグザジェレイティング！ イッツ ナット ザット バッド",
          }
        ],
      },
      {
        usage: "本当だよと強調するとき \"I'm not exaggerating.\"（盛ってないよ、ガチだよ）",
        dialogue: [
          {
            english: "That bread is so good it'll make you fly.",
            japanese: "あのパン、美味しすぎて飛ぶよ",
            reading: "ザット ブレッド イズ ソー グッド イットル メイク ユー フライ",
          },
          {
            english: "I'm not exaggerating, it's the best bread ever!",
            japanese: "盛ってないって、マジで今までで一番美味しいパンだから！",
            reading: "アイム ナット イグザジェレイティング、 イッツ ザ ベスト ブレッド エヴァー！",
          }
        ],
      }
    ],
  },
  {
    id: 44,
    category: "daily-conversation",
    meaning: "ちょっと疑っている、本当かなと思う",
    word: "Skeptical",
    reading: "スケプティカル",
    patterns: [
      {
        usage: "本当かな〜？と怪しむとき \"I'm a little skeptical.\"（ちょっと怪しいと思ってるんだよね）",
        dialogue: [
          {
            english: "Apparently this AI tool makes videos in one second.",
            japanese: "このAIツール、1秒で動画が作れるらしいよ",
            reading: "アパレントリー ディス エーアイ ツール メイクス ヴィデオズ イン ワン セカンド",
          },
          {
            english: "Hmm, I'm a little skeptical about that.",
            japanese: "うーん、それちょっと本当か怪しい気がするな〜",
            reading: "ハム、 アイム ア リトル スケプティカル アバウト ザット",
          }
        ],
      },
      {
        usage: "最初は疑ってたけど、と言うとき \"I was skeptical at first.\"（最初は半信半疑だったんだ）",
        dialogue: [
          {
            english: "I tried this app and it was amazing!",
            japanese: "このアプリ、使ってみたら最高だった！",
            reading: "アイ トライド ディス アップ アンド イット ワズ アメイジング！",
          },
          {
            english: "Right? I was skeptical at first too.",
            japanese: "でしょ？私も最初は半信半疑だったんだよね",
            reading: "ライト？ アイ ワズ スケプティカル アット ファースト トゥー",
          }
        ],
      }
    ],
  },
  {
    id: 45,
    category: "daily-conversation",
    meaning: "微妙な、絶妙な（★味やデザインの「隠し味」や「ニュアンス」に使う）",
    word: "Subtle",
    reading: "サトル",
    patterns: [
      {
        usage: "ほんのりした違いを言うとき \"Subtle difference\"（微妙な違い、絶妙な差）",
        dialogue: [
          {
            english: "What's different between these two designs?",
            japanese: "この2つのデザイン、どこが違うの？",
            reading: "ワッツ ディファレント ビトウィーン ディーズ トゥー デザインズ？",
          },
          {
            english: "There is a subtle difference in color.",
            japanese: "色に絶妙な違いがあるんだよね",
            reading: "ゼア イズ ア サトル ディファレンス イン カラー",
          }
        ],
      },
      {
        usage: "ほんのり風味を感じるとき \"Subtle taste\"（隠し味、ほんのりした味）",
        dialogue: [
          {
            english: "This bread is so good!",
            japanese: "このパン、すごく美味しい！",
            reading: "ディス ブレッド イズ ソー グッド！",
          },
          {
            english: "It has a subtle butter flavor.",
            japanese: "ほんのりバターの風味がして美味しいよね",
            reading: "イット ハズ ア サトル バター フレーヴァー",
          }
        ],
      }
    ],
  },
  {
    id: 46,
    category: "daily-conversation",
    meaning: "親しみやすい、気軽に話せる",
    word: "Friendly",
    reading: "フレンドリー",
    patterns: [
      {
        usage: "あの人優しそう！というとき \"He is so friendly.\"（あの人めっちゃフレンドリーだよ）",
        dialogue: [
          {
            english: "Did you talk to the person next to you?",
            japanese: "隣の席の人と話した？",
            reading: "ディド ユー トーク トゥ ザ パーソン ネクスト トゥ ユー？",
          },
          {
            english: "Yeah, he is so friendly and nice!",
            japanese: "うん、めっちゃフレンドリーで良い人だったよ！",
            reading: "イェア、 ヒー イズ ソー フレンドリー アンド ナイス！",
          }
        ],
      },
      {
        usage: "フレンドリーに行こうと言うとき \"Let's be friendly.\"（親しみやすく接しよう）",
        dialogue: [
          {
            english: "A new student just came in.",
            japanese: "新入生が入ってきたね",
            reading: "ア ニュー スチューデント ジャスト ケイム イン",
          },
          {
            english: "Let's be friendly and welcome them!",
            japanese: "親しみやすく話しかけて歓迎してあげようよ！",
            reading: "レッツ ビー フレンドリー アンド ウェルカム ゼム！",
          }
        ],
      }
    ],
  },
  {
    id: 47,
    category: "daily-conversation",
    meaning: "好み、優先（★「どっちが好き？」と聞くときに上品かつフランクに使う）",
    word: "Preference",
    reading: "プレファレンス",
    patterns: [
      {
        usage: "自分の好みを言うとき \"My preference is...\"（私の好みとしては〜かな）",
        dialogue: [
          {
            english: "Patio or inside, which do you prefer?",
            japanese: "テラス席と店内、どっちがいい？",
            reading: "パティオ オア インサイド, ウィッチ ドゥ ユー プリファー？",
          },
          {
            english: "My preference is the patio, it's nice outside.",
            japanese: "私の好みとしてはテラス席かな、外が気持ちいいし",
            reading: "マイ プレファレンス イズ ザ パティオ、 イッツ ナイス アウトサイド",
          }
        ],
      },
      {
        usage: "どっちでもいいよと言うとき \"No strong preference.\"（強いこだわり（好み）はないよ＝どっちでもいいよ）",
        dialogue: [
          {
            english: "Coffee or tea, which one?",
            japanese: "コーヒーと紅茶、どっちにする？",
            reading: "コーヒー オア ティー, ウィッチ ワン？",
          },
          {
            english: "I have no strong preference, either is fine!",
            japanese: "特にこだわりはないから、どっちでもいいよ！",
            reading: "アイ ハヴ ノー ストロング プレファレンス、 イーザー イズ ファイン！",
          }
        ],
      }
    ],
  },
  {
    id: 48,
    category: "daily-conversation",
    meaning: "うらやましい！（★Jealousよりドロドロしてない、100%ポジティブな「いーなー！」）",
    word: "Envious",
    reading: "エンヴィアス",
    patterns: [
      {
        usage: "純粋に「いーなー！」と言うとき \"I'm so envious!\"（めっちゃうらやましい！）",
        dialogue: [
          {
            english: "I'm going to a fancy restaurant this weekend.",
            japanese: "週末、高級レストランに行くんだ",
            reading: "アイム ゴーイング トゥ ア ファンシー レストラン ディス ウィークエンド",
          },
          {
            english: "Wow, I'm so envious! Have fun!",
            japanese: "わお、めっちゃうらやましい！楽しんできてね！",
            reading: "ワウ、 アイム ソー エンヴィアス！ ハヴ ファン！",
          }
        ],
      },
      {
        usage: "うらやましがらせないでよ、のとき \"Don't make me envious.\"（うらやましくなっちゃうじゃん！笑）",
        dialogue: [
          {
            english: "Look, a photo from a Hawaii beach!",
            japanese: "ほら、ハワイのビーチの写真！",
            reading: "ルック, ア フォート フロム ア ハワイ ビーチ！",
          },
          {
            english: "Stop it, don't make me envious!",
            japanese: "やめてよ、うらやましくなっちゃうじゃん！笑",
            reading: "ストップ イット、 ドント メイク ミー エンヴィアス！",
          }
        ],
      }
    ],
  },
  {
    id: 49,
    category: "daily-conversation",
    meaning: "気まずい、微妙な空気（★会話が一瞬止まったときや、やらかした時に超使う）",
    word: "Awkward",
    reading: "オークワード",
    patterns: [
      {
        usage: "気まずい空気になったとき \"That was awkward.\"（今の気まずかったわ〜…）",
        dialogue: [
          {
            english: "I ran into my ex and said hi.",
            japanese: "元カレとすれ違って挨拶しちゃった",
            reading: "アイ ラン イントゥ マイ エックス アンド セッド ハイ",
          },
          {
            english: "Oh no, that was awkward.",
            japanese: "うわあ、それは気まずかったね…",
            reading: "オー ノー、 ザット ワズ オークワード",
          }
        ],
      },
      {
        usage: "自分がぎこちないとき \"I feel awkward.\"（なんかそわそわする、気まずい）",
        dialogue: [
          {
            english: "Everyone's fluent in English and I'm nervous.",
            japanese: "みんな英語ペラペラで緊張する",
            reading: "エヴリワンズ フルーエント イン イングリッシュ アンド アイム ナーヴァス",
          },
          {
            english: "I feel awkward too, but it's okay!",
            japanese: "私もなんかそわそわしちゃうけど、大丈夫だよ！",
            reading: "アイ フィール オークワード トゥー、 バット イッツ オーケイ！",
          }
        ],
      }
    ],
  },
  {
    id: 50,
    category: "daily-conversation",
    meaning: "〜をありがたく思う、感謝する（★Thank youより深い「本当に感謝してる」）",
    word: "Appreciate",
    reading: "アプレシエイト",
    patterns: [
      {
        usage: "手伝ってもらって嬉しかったとき \"I really appreciate it.\"（本当に助かる！ありがとう！）",
        dialogue: [
          {
            english: "I'll help you look at the homework code.",
            japanese: "宿題のコード、一緒に見てあげるよ",
            reading: "アイル ヘルプ ユー ルック アット ザ ホームワーク コード",
          },
          {
            english: "Wow, thank you! I really appreciate it!",
            japanese: "わあ、ありがとう！本当に感謝するよ！",
            reading: "ワウ、 サンク ユー！ アイ リアリー アプレシエイト イット！",
          }
        ],
      },
      {
        usage: "相手の優しさに感謝するとき \"I appreciate your help.\"（助けてくれてありがとう）",
        dialogue: [
          {
            english: "You can always talk to me.",
            japanese: "いつでも相談に乗るからね",
            reading: "ユー キャン オールウェイズ トーク トゥ ミー",
          },
          {
            english: "I appreciate your help, you're the best!",
            japanese: "助けてくれて本当にありがとう、あなた最高！",
            reading: "アイ アプレシエイト ユア ヘルプ、 ユーアー ザ ベスト！",
          }
        ],
      }
    ],
  },
  {
    id: 51,
    category: "ai-community",
    meaning: "仕様、設計書（★Cursorに「この仕様で作って」と言う時に最頻出）",
    word: "Specification / Spec",
    reading: "スペシフィケーション / スペック",
    patterns: [
      {
        usage: "仕様を確認するとき \"Check the specs.\"（仕様書・機能要件を確認して）",
        dialogue: [
          {
            english: "How should this button work when you press it?",
            japanese: "このボタンを押したとき、どう動けばいい？",
            reading: "ハウ シュッド ディス ボタン ワーク ウェン ユー プレス イット？",
          },
          {
            english: "Check the specs I pasted.",
            japanese: "貼り付けた仕様書を確認してみて",
            reading: "チェック ザ スペックス アイ ペイステッド",
          }
        ],
      },
      {
        usage: "仕様が変わったとき \"The specs changed.\"（仕様が変わったんだよね）",
        dialogue: [
          {
            english: "Are you rewriting the code?",
            japanese: "コード書き直してるの？",
            reading: "アー ユー リライティング ザ コード？",
          },
          {
            english: "Yeah, the specs changed suddenly.",
            japanese: "うん、急に仕様が変わっちゃってさ",
            reading: "イェア、 ザ スペックス チェンジド サドンリー",
          }
        ],
      }
    ],
  },
  {
    id: 52,
    category: "ai-community",
    meaning: "シームレスな、途切れのない（★ツール同士の連携がスムーズな時に超使う）",
    word: "Seamless",
    reading: "シームレス",
    patterns: [
      {
        usage: "連携がスムーズなとき \"Seamless integration\"（シームレスな連携・統合）",
        dialogue: [
          {
            english: "How's the Cursor and GitHub integration?",
            japanese: "CursorとGitHubの連携どう？",
            reading: "ハウズ ザ カーソル アンド ギットハブ インテグレーション？",
          },
          {
            english: "It's so seamless and comfortable!",
            japanese: "めちゃくちゃシームレスで超快適だよ！",
            reading: "イッツ ソー シームレス アンド コンフォータブル！",
          }
        ],
      },
      {
        usage: "スムーズに動くとき \"It works seamlessly.\"（途切れなくスムーズに動くね）",
        dialogue: [
          {
            english: "This app loads data fast.",
            japanese: "このアプリ、データの読み込み早いね",
            reading: "ディス アップ ローズ データ ファスト",
          },
          {
            english: "Yeah, it works seamlessly.",
            japanese: "ね、一切引っかかりなくシームレスに動くよね",
            reading: "イェア、 イット ワークス シームレスリー",
          }
        ],
      }
    ],
  },
  {
    id: 53,
    category: "ai-community",
    meaning: "直感的な（★操作性が分かりやすくて最高なデザインの褒め言葉）",
    word: "Intuitive",
    reading: "インチューイティブ",
    patterns: [
      {
        usage: "操作しやすいと褒めるとき \"The UI is intuitive.\"（直感的に使えて分かりやすいUIだね）",
        dialogue: [
          {
            english: "What do you think of the new flashcard app's look?",
            japanese: "新しい単語帳アプリの見た目どうかな？",
            reading: "ワット ドゥ ユー シンク オブ ザ ニュー フラッシュカード アップズ ルック？",
          },
          {
            english: "I love it! The UI is very intuitive.",
            japanese: "最高！すごく直感的で分かりやすいUIだね",
            reading: "アイ ラヴ イット！ ザ ユーアイ イズ ヴェリー インチューイティヴ",
          }
        ],
      },
      {
        usage: "説明なしで使えるとき \"Intuitive design\"（直感的なデザイン）",
        dialogue: [
          {
            english: "Should we make a user manual?",
            japanese: "使い方のマニュアル作った方がいい？",
            reading: "シュッド ウィー メイク ア ユーザーマニュアル？",
          },
          {
            english: "No need, it has an intuitive design.",
            japanese: "いらないよ、直感的に触れるデザインだから大丈夫",
            reading: "ノー ニード、 イット ハズ アン インチューイティヴ デザイン",
          }
        ],
      }
    ],
  },
  {
    id: 54,
    category: "ai-community",
    meaning: "互換性がある、対応している",
    word: "Compatible",
    reading: "コンパティブル",
    patterns: [
      {
        usage: "対応しているか聞くとき \"Is it compatible with...?\"（〜に対応してる？）",
        dialogue: [
          {
            english: "Will this AI feature work on Mac?",
            japanese: "このAI機能、Macでも動くかな？",
            reading: "ウィル ディス エーアイ フィーチャー ワーク オン マック？",
          },
          {
            english: "Yes, it's compatible with Mac.",
            japanese: "うん、Macにもちゃんと対応してるよ",
            reading: "イエス、 イッツ コンパティブル ウィズ マック",
          }
        ],
      },
      {
        usage: "動かないとき \"Not compatible\"（互換性がない、対応していない）",
        dialogue: [
          {
            english: "I got an error.",
            japanese: "エラーが出ちゃった",
            reading: "アイ ガット アン エラー",
          },
          {
            english: "Ah, that library is not compatible with this version.",
            japanese: "あー、そのライブラリはこのバージョンに対応してないんだわ",
            reading: "アー、 ザット ライブラリー イズ ナット コンパティブル ウィズ ディス ヴァージョン",
          }
        ],
      }
    ],
  },
  {
    id: 55,
    category: "ai-community",
    meaning: "限界、制約（★AIモデルができることの「限界」を話す時に頻出）",
    word: "Limitation",
    reading: "リミテーション",
    patterns: [
      {
        usage: "限界があると言うとき \"It has some limitations.\"（いくつか限界・制約があるよ）",
        dialogue: [
          {
            english: "Can this AI translate long texts perfectly?",
            japanese: "このAI、長文の翻訳も完璧にできる？",
            reading: "キャン ディス エーアイ トランスレイト ロング テキスト パーフェクトリー？",
          },
          {
            english: "It's good, but it still has some limitations.",
            japanese: "優秀だけど、まだいくつか限界はあるよ",
            reading: "イッツ グッド、 バット イット スティル ハズ サム リミテーションズ",
          }
        ],
      },
      {
        usage: "今の技術の限界を言うとき \"Tech limitation\"（技術的な限界）",
        dialogue: [
          {
            english: "Part of the image sometimes glitches.",
            japanese: "画像の一部がたまにバグるんだよね",
            reading: "パート オブ ザ イメージ サムタイムズ グリッチズ",
          },
          {
            english: "That's just a tech limitation for now.",
            japanese: "それは現時点での技術的な限界だね",
            reading: "ザッツ ジャスト ア テック リミテーション フォー ナウ",
          }
        ],
      }
    ],
  },
  {
    id: 56,
    category: "ai-community",
    meaning: "〜を最適化する、効率化する（★プロンプトやコードを磨くときに必須）",
    word: "Optimize",
    reading: "オプティマイズ",
    patterns: [
      {
        usage: "プロンプトを磨きたいとき \"Optimize my prompt\"（プロンプトを最適化する）",
        dialogue: [
          {
            english: "The AI responses feel kinda off.",
            japanese: "AIの返答がなんかズレるんだよね",
            reading: "ザ エーアイ レスポンスズ フィール カインダ オフ",
          },
          {
            english: "You should optimize your prompt.",
            japanese: "プロンプトをもっと最適化した方がいいね",
            reading: "ユー シュッド オプティマイズ ユア プロンプト",
          }
        ],
      },
      {
        usage: "コードを軽くしたいとき \"Optimize the code\"（コードを効率化する）",
        dialogue: [
          {
            english: "The app feels a little sluggish.",
            japanese: "アプリの動きが少し重いかも",
            reading: "ザ アップ フィールズ ア リトル スラッギッシュ",
          },
          {
            english: "Let's optimize the code tonight.",
            japanese: "今夜コードを最適化して軽くしよう",
            reading: "レッツ オプティマイズ ザ コード トゥナイト",
          }
        ],
      }
    ],
  },
  {
    id: 57,
    category: "ai-community",
    meaning: "カスタマイズする、好みに合わせる",
    word: "Customize",
    reading: "カスタマイズ",
    patterns: [
      {
        usage: "自分好みに変えるとき \"Customize the settings\"（設定をカスタムする）",
        dialogue: [
          {
            english: "Cursor's look is cool.",
            japanese: "Cursorの見た目、かっこいいね",
            reading: "カーソルズ ルック イズ クール",
          },
          {
            english: "Thanks, you can customize the theme easily.",
            japanese: "ありがと、テーマは簡単にカスタムできるよ",
            reading: "サンクス、 ユー キャン カスタマイズ ザ シーム イージリー",
          }
        ],
      },
      {
        usage: "特注のプロンプトのとき \"Customized prompt\"（自分専用に作ったプロンプト）",
        dialogue: [
          {
            english: "It's annoying writing the same instructions every time.",
            japanese: "毎回同じ指示書くの面倒だな",
            reading: "イッツ アノイイング ライティング ザ セイム インストラクションズ エヴリ タイム",
          },
          {
            english: "Use a customized system prompt.",
            japanese: "自分専用にカスタムしたシステムプロンプトを使うといいよ",
            reading: "ユーズ ア カスタマイズド システム プロンプト",
          }
        ],
      }
    ],
  },
  {
    id: 58,
    category: "ai-community",
    meaning: "〜を自動化する",
    word: "Automate",
    reading: "オートメイト",
    patterns: [
      {
        usage: "作業を自動にしたいとき \"Automate the process\"（作業を自動化する）",
        dialogue: [
          {
            english: "Copying data manually every day is exhausting.",
            japanese: "毎日手動でデータコピーするのしんどい",
            reading: "コピーイング データ マニュアリー エヴリ デイ イズ イグゾースティング",
          },
          {
            english: "Let's automate the process using AI.",
            japanese: "AIを使ってその作業自動化しちゃおうよ",
            reading: "レッツ オートメイト ザ プロセス ユージング エーアイ",
          }
        ],
      },
      {
        usage: "自動化されて便利になったとき \"It's automated.\"（自動化されてるよ）",
        dialogue: [
          {
            english: "How do you send notifications?",
            japanese: "通知はどうやって送ってるの？",
            reading: "ハウ ドゥ ユー センド ノーティフィケーションズ？",
          },
          {
            english: "It's completely automated now.",
            japanese: "今はもう完全に自動化されてるよ",
            reading: "イッツ コンプリートリー オートメイテッド ナウ",
          }
        ],
      }
    ],
  },
  {
    id: 59,
    category: "ai-community",
    meaning: "〜を生成する（★AIが文字や画像を「作り出す」時の正式な動詞）",
    word: "Generate",
    reading: "ジェネレイト",
    patterns: [
      {
        usage: "AIに作らせるとき \"Generate an image\"（画像を生成する）",
        dialogue: [
          {
            english: "What should we do for the blog icon?",
            japanese: "ブログのアイコンどうしよう",
            reading: "ワット シュッド ウィー ドゥ フォー ザ ブログ アイコン？",
          },
          {
            english: "Just ask the AI to generate one.",
            japanese: "AIにアイコンを生成してもらいなよ",
            reading: "ジャスト アスク ザ エーアイ トゥ ジェネレイト ワン",
          }
        ],
      },
      {
        usage: "コードを作ってもらうとき \"Generate the code\"（コードを生成する）",
        dialogue: [
          {
            english: "What did you ask Cursor?",
            japanese: "Cursorに何て頼んだの？",
            reading: "ワット ディド ユー アスク カーソル？",
          },
          {
            english: "I asked it to generate the quiz function.",
            japanese: "クイズ機能を生成してって頼んだんだ",
            reading: "アイ アスクド イット トゥ ジェネレイト ザ クイズ ファンクション",
          }
        ],
      }
    ],
  },
  {
    id: 60,
    category: "ai-community",
    meaning: "展開する、実戦投入する（★作ったアプリをネット上に「公開・アップロード」する行為）",
    word: "Deploy",
    reading: "デプロイ",
    patterns: [
      {
        usage: "ネット上に公開するとき \"Deploy the app\"（アプリを公開する）",
        dialogue: [
          {
            english: "The flashcard app is almost done!",
            japanese: "単語帳アプリ、ほぼ完成したよ！",
            reading: "ザ フラッシュカード アップ イズ アルモスト ダン！",
          },
          {
            english: "Awesome! Let's deploy it now!",
            japanese: "最高じゃん！今すぐネットに公開しよう！",
            reading: "オーサム！ レッツ デプロイ イット ナウ！",
          }
        ],
      },
      {
        usage: "公開作業中のとき \"Deploying...\"（デプロイ中、公開処理中）",
        dialogue: [
          {
            english: "Is the screen frozen?",
            japanese: "画面が固まってる？",
            reading: "イズ ザ スクリーン フローズン？",
          },
          {
            english: "No, it's just deploying the code.",
            japanese: "違うよ、今コードをデプロイ公開してるところなんだ",
            reading: "ノー、 イッツ ジャスト デプロイイング ザ コード",
          }
        ],
      }
    ],
  },
  {
    id: 61,
    category: "ai-community",
    meaning: "〜を統合する、組み込む（★新しいAPIや機能をアプリに合体させるとき）",
    word: "Integrate",
    reading: "インテグレート",
    patterns: [
      {
        usage: "新機能を組み込むとき \"Integrate the AI feature\"（AI機能を組み込む）",
        dialogue: [
          {
            english: "I want to add audio to the flashcard app.",
            japanese: "単語帳に音声つけたいんだよね",
            reading: "アイ ワント トゥ アッド オーディオ トゥ ザ フラッシュカード アップ",
          },
          {
            english: "We can integrate the Web Speech API.",
            japanese: "Web Speech APIを組み込めばできるよ",
            reading: "ウィー キャン インテグレイト ザ ウェブ スピーチ エーピーアイ",
          }
        ],
      },
      {
        usage: "連携させたいとき \"Integrate with...\"（〜と連携・合体させる）",
        dialogue: [
          {
            english: "I want to send data to Notion.",
            japanese: "Notionにデータを送りたい",
            reading: "アイ ワント トゥ センド データ トゥ ノーション",
          },
          {
            english: "Let's integrate the app with Notion.",
            japanese: "アプリをNotionと連携させよう",
            reading: "レッツ インテグレイト ザ アップ ウィズ ノーション",
          }
        ],
      }
    ],
  },
  {
    id: 62,
    category: "ai-community",
    meaning: "〜を複製する、再現する（★バグや他人のすごい機能を「手元で再現する」とき）",
    word: "Replicate",
    reading: "レプリケート",
    patterns: [
      {
        usage: "バグを再現して確かめるとき \"Replicate the bug\"（バグを再現する）",
        dialogue: [
          {
            english: "There's an error where audio sometimes doesn't play.",
            japanese: "たまに音声が流れないエラーがある",
            reading: "ゼアズ アン エラー ウェア オーディオ サムタイムズ ドゥズント プレイ",
          },
          {
            english: "Can you replicate the bug right now?",
            japanese: "今そのバグ再現できる？",
            reading: "キャン ユー レプリケイト ザ バグ ライト ナウ？",
          }
        ],
      },
      {
        usage: "他人のすごいプロンプトを真似るとき \"Replicate the output\"（結果を再現する）",
        dialogue: [
          {
            english: "This AI art is amazing.",
            japanese: "このAIアートすごいね",
            reading: "ディス エーアイ アート イズ アメイジング",
          },
          {
            english: "I'll try to replicate the output.",
            japanese: "私も同じような出力結果を再現してみるよ",
            reading: "アイル トライ トゥ レプリケイト ザ アウトプット",
          }
        ],
      }
    ],
  },
  {
    id: 63,
    category: "ai-community",
    meaning: "高度な、洗練された（★機能やプロンプトのレベルが高いときの褒め言葉）",
    word: "Sophisticated",
    reading: "ソフィスティケイトゥッド",
    patterns: [
      {
        usage: "プロンプトが超ハイレベルなとき \"Sophisticated prompt\"（洗練されたプロンプト）",
        dialogue: [
          {
            english: "This AI's answers are so smart!",
            japanese: "このAIの回答、めちゃくちゃ賢い！",
            reading: "ディス エーアイズ アンサーズ アー ソー スマート！",
          },
          {
            english: "You must have used a sophisticated prompt.",
            japanese: "よっぽど洗練されたプロンプトを使ったんだね",
            reading: "ユー マスト ハヴ ユーズド ア ソフィスティケイテッド プロンプト",
          }
        ],
      },
      {
        usage: "アプリの作りがすごいとき \"It looks sophisticated.\"（高度で完成度が高そうに見える）",
        dialogue: [
          {
            english: "The structure of the code Cursor wrote is clean.",
            japanese: "Cursorが書いたコードの構造、綺麗だよ",
            reading: "ザ ストラクチャー オブ ザ コード カーソル ロート イズ クリーン",
          },
          {
            english: "Wow, it looks sophisticated.",
            japanese: "わお、高度で洗練されてるね",
            reading: "ワウ、 イット ルックス ソフィスティケイテッド",
          }
        ],
      }
    ],
  },
  {
    id: 64,
    category: "ai-community",
    meaning: "〜を革新する、劇的に変える",
    word: "Revolutionize",
    reading: "レヴォルーショナイズ",
    patterns: [
      {
        usage: "AIが世界を変えているとき \"Revolutionize the way we...\"（私たちの〜の方法を激変させる）",
        dialogue: [
          {
            english: "Everyone's started using Cursor lately.",
            japanese: "最近みんなCursor使い始めたね",
            reading: "エヴリワンズ スターテッド ユージング カーソル レイタリー",
          },
          {
            english: "Yeah, AI is revolutionizing the way we code!",
            japanese: "うん、AIが私たちのコーディング方法を劇的に変えてるよね！",
            reading: "イェア、 エーアイ イズ レヴォルーショナイジング ザ ウェイ ウィー コード！",
          }
        ],
      },
      {
        usage: "ライフスタイルを変えるとき \"Revolutionize the industry\"（業界を激変させる）",
        dialogue: [
          {
            english: "This new AI tool is too amazing.",
            japanese: "この新しいAIツール凄すぎる",
            reading: "ディス ニュー エーアイ ツール イズ トゥー アメイジング",
          },
          {
            english: "It's going to revolutionize the whole industry.",
            japanese: "業界全体を劇的に変えちゃうレベルだね",
            reading: "イッツ ゴーイング トゥ レヴォルーショナイズ ザ ホール インダストリー",
          }
        ],
      }
    ],
  },
  {
    id: 65,
    category: "ai-community",
    meaning: "拡張性、スケーラビリティ（★ユーザーが増えてもアプリが耐えられるかの度合い）",
    word: "Scalability",
    reading: "スケーラビリティ",
    patterns: [
      {
        usage: "将来ユーザーが増えても大丈夫か話すとき \"We need to consider scalability.\"（拡張性を考える必要があるね）",
        dialogue: [
          {
            english: "Will this app be okay if a lot of people use it?",
            japanese: "このアプリ、たくさんの人が使っても大丈夫？",
            reading: "ウィル ディス アップ ビー オーケイ イフ ア ロット オブ ピープル ユーズ イット？",
          },
          {
            english: "We need to consider scalability for the database.",
            japanese: "データベースの拡張性を考えなきゃね",
            reading: "ウィー ニード トゥ コンシダー スケーラビリティ フォー ザ データベース",
          }
        ],
      },
      {
        usage: "問題ないと言うとき \"Good scalability\"（拡張性が高い）",
        dialogue: [
          {
            english: "What do you think of this system structure?",
            japanese: "このシステム構造はどう？",
            reading: "ワット ドゥ ユー シンク オブ ディス システム ストラクチャー？",
          },
          {
            english: "It has good scalability.",
            japanese: "これなら拡張性も高くてバッチリだよ",
            reading: "イット ハズ グッド スケーラビリティ",
          }
        ],
      }
    ],
  },
  {
    id: 66,
    category: "ai-community",
    meaning: "効率、パフォーマンスの良さ",
    word: "Efficiency",
    reading: "エフィシェンシー",
    patterns: [
      {
        usage: "作業効率を言うとき \"Improve efficiency\"（効率を上げる）",
        dialogue: [
          {
            english: "What's the biggest benefit of using AI?",
            japanese: "AIを使う最大のメリットって何？",
            reading: "ワッツ ザ ビッゲスト ベネフィット オブ ユージング エーアイ？",
          },
          {
            english: "It drastically improves your work efficiency.",
            japanese: "作業効率が爆発的に上がることだね",
            reading: "イット ドラスティカリー インプルーブズ ユア ワーク エフィシェンシー",
          }
        ],
      },
      {
        usage: "コードの無駄がないとき \"Code efficiency\"（コードの効率の良さ）",
        dialogue: [
          {
            english: "The code Cursor wrote is short and clean.",
            japanese: "Cursorが書いたコード、短くて綺麗",
            reading: "ザ コード カーソル ロート イズ ショート アンド クリーン",
          },
          {
            english: "Yeah, it's very clear on efficiency.",
            japanese: "うん、効率の良さを重視してくれてるね",
            reading: "イェア、 イッツ ヴェリー クリア オン エフィシェンシー",
          }
        ],
      }
    ],
  },
  {
    id: 67,
    category: "ai-community",
    meaning: "〜を検知する、見つける（★エラーや特定のパターンをシステムが見つけるとき）",
    word: "Detect",
    reading: "ディテクト",
    patterns: [
      {
        usage: "バグやエラーを見つけたとき \"Detect an error\"（エラーを検知する）",
        dialogue: [
          {
            english: "The app just crashed!",
            japanese: "アプリが急に止まった！",
            reading: "ザ アップ ジャスト クラッシュド！",
          },
          {
            english: "The system will detect the error and log it.",
            japanese: "システムがエラーを検知してログに残してくれてるはずだよ",
            reading: "ザ システム ウィル ディテクト ザ エラー アンド ログ イット",
          }
        ],
      },
      {
        usage: "AIが画像から何かを見つけるとき \"Detect faces/objects\"（顔や物体を検知する）",
        dialogue: [
          {
            english: "Can this AI tell what's in a photo?",
            japanese: "このAI、写真に何が写ってるか分かるの？",
            reading: "キャン ディス エーアイ テル ワッツ イン ア フォート？",
          },
          {
            english: "Yeah, it can detect objects instantly.",
            japanese: "うん、一瞬で物体を検知できるよ",
            reading: "イェア、 イット キャン ディテクト オブジェクツ インスタントリー",
          }
        ],
      }
    ],
  },
  {
    id: 68,
    category: "ai-community",
    meaning: "正確さ、精度（★AIの出力や翻訳の「正確性」を話す時に最頻出）",
    word: "Accuracy",
    reading: "アキュラシー",
    patterns: [
      {
        usage: "AIの精度を言うとき \"The accuracy is...\"（精度が〜）",
        dialogue: [
          {
            english: "Can I trust this AI's translation?",
            japanese: "このAIの翻訳って信じて大丈夫？",
            reading: "キャン アイ トラスト ディス エーアイズ トランスレーション？",
          },
          {
            english: "The accuracy is high, but always double-check.",
            japanese: "精度は高いけど、一応いつも確認してね",
            reading: "ザ アキュラシー イズ ハイ、 バット オールウェイズ ダブルチェック",
          }
        ],
      },
      {
        usage: "精度を上げたいとき \"Improve the accuracy\"（正確さを高める）",
        dialogue: [
          {
            english: "I want it to return more accurate data.",
            japanese: "もっと正しいデータを返してほしい",
            reading: "アイ ワント イット トゥ リターン モア アキュレイト データ",
          },
          {
            english: "We need to improve the accuracy of the prompt.",
            japanese: "プロンプトの精度を上げる必要があるね",
            reading: "ウィー ニード トゥ インプルーブ ザ アキュラシー オブ ザ プロンプト",
          }
        ],
      }
    ],
  },
  {
    id: 69,
    category: "ai-community",
    meaning: "シミュレーションする、模擬体験する（★本番前にアプリの動きをテストするとき）",
    word: "Simulate",
    reading: "シミュレート",
    patterns: [
      {
        usage: "ユーザーの動きを試すとき \"Simulate user behavior\"（ユーザーの動きをテストする）",
        dialogue: [
          {
            english: "What happens if someone spam-clicks the button?",
            japanese: "ボタン連打されたらアプリどうなるかな？",
            reading: "ワット ハプンズ イフ サムワン スパム クリックス ザ ボタン？",
          },
          {
            english: "Let's simulate that behavior and test it.",
            japanese: "その動きをシミュレートしてテストしてみよう",
            reading: "レッツ シミュレイト ザット ビヘイヴィア アンド テスト イット",
          }
        ],
      },
      {
        usage: "本番の環境を試すとき \"Simulate the environment\"（環境を再現する）",
        dialogue: [
          {
            english: "I don't have a real phone to test on.",
            japanese: "スマホの実機が手元にない",
            reading: "アイ ドント ハヴ ア リアル フォーン トゥ テスト オン",
          },
          {
            english: "We can simulate the phone screen in Cursor.",
            japanese: "Cursor（ブラウザ）上でスマホ画面をシミュレートできるよ",
            reading: "ウィー キャン シミュレイト ザ フォーン スクリーン イン カーソル",
          }
        ],
      }
    ],
  },
  {
    id: 70,
    category: "ai-community",
    meaning: "シームレスに同期する、最新状態にする（★Notionやクラウドと「同期」するとき）",
    word: "Sync",
    reading: "シンク",
    patterns: [
      {
        usage: "データを同期させるとき \"Sync the data\"（データを同期する）",
        dialogue: [
          {
            english: "Words I added on my phone aren't on my computer.",
            japanese: "スマホで追加した単語がパソコンにない",
            reading: "ワードズ アイ アデッド オン マイ フォーン アーント オン マイ コンピューター",
          },
          {
            english: "You need to sync the data with the cloud.",
            japanese: "データをクラウドと同期させる必要があるよ",
            reading: "ユー ニード トゥ シンク ザ データ ウィズ ザ クラウド",
          }
        ],
      },
      {
        usage: "同期が完了したとき \"In sync\"（同期できている、一致している）",
        dialogue: [
          {
            english: "Did the data update?",
            japanese: "データ更新された？",
            reading: "ディド ザ データ アップデート？",
          },
          {
            english: "Yes, everything is in sync now.",
            japanese: "うん、今は全部同期されて最新状態だよ",
            reading: "イエス、 エヴリシング イズ イン シンク ナウ",
          }
        ],
      }
    ],
  },
  {
    id: 71,
    category: "class-discussion",
    meaning: "パートナー、ペアを組む相手（★授業で「2人組になって」と言われた時の相棒）",
    word: "Partner",
    reading: "パートナー",
    patterns: [
      {
        usage: "ペアを組もうと誘うとき \"Want to be partners?\"（ペア組まない？）",
        dialogue: [
          {
            english: "The next assignment is pairs, apparently.",
            japanese: "次のワーク、2人組だって",
            reading: "ザ ネクスト アサインメント イズ ペアズ, アパレントリー",
          },
          {
            english: "Want to be partners? Let's work together!",
            japanese: "ペア組まない？一緒にやろうよ！",
            reading: "ワント トゥ ビー パートナーズ？ レッツ ワーク トゥゲザー！",
          }
        ],
      },
      {
        usage: "すでに相手が決まっているか聞くとき \"Do you have a partner?\"（ペアもう決まった？）",
        dialogue: [
          {
            english: "Oh, are you still alone?",
            japanese: "あ、まだ1人かな？",
            reading: "オー, アー ユー スティル アローン？",
          },
          {
            english: "Do you have a partner yet? If not, let's team up!",
            japanese: "ペアもう決まった？まだなら一緒にやろ！",
            reading: "ドゥ ユー ハヴ ア パートナー イエット？ イフ ナット、 レッツ チーム アップ！",
          }
        ],
      }
    ],
  },
  {
    id: 72,
    category: "class-discussion",
    meaning: "〜に追いつく、遅れを取り戻す（★休んだ授業や遅れてる課題の話で超頻出）",
    word: "Catch up on...",
    reading: "キャッチ アップ オン",
    patterns: [
      {
        usage: "遅れた分を勉強しなきゃというとき \"I need to catch up on...\"（〜の遅れを取り戻さなきゃ）",
        dialogue: [
          {
            english: "You were out of school last week, are you okay?",
            japanese: "先週学校休んでたよね、大丈夫？",
            reading: "ユー ワー アウト オブ スクール ラスト ウィーク, アー ユー オーケイ？",
          },
          {
            english: "I really need to catch up on the lectures!",
            japanese: "講義の遅れをマジで取り戻さなきゃいけないんだ！",
            reading: "アイ リアリー ニード トゥ キャッチ アップ オン ザ レクチャーズ！",
          }
        ],
      },
      {
        usage: "溜まった課題をやるとき \"Catch up on my assignments\"（課題を一気に片付ける）",
        dialogue: [
          {
            english: "What are your weekend plans?",
            japanese: "週末の予定は？",
            reading: "ワット アー ユア ウィークエンド プランズ？",
          },
          {
            english: "Just catching up on my late assignments.",
            japanese: "溜まっちゃった課題を一気に片付ける予定…",
            reading: "ジャスト キャッチング アップ オン マイ レイト アサインメントズ",
          }
        ],
      }
    ],
  },
  {
    id: 73,
    category: "class-discussion",
    meaning: "〜をさぼる、スキップする（★友達から「次の授業どうする？」と聞かれる定番）",
    word: "Skip",
    reading: "スキップ",
    patterns: [
      {
        usage: "授業をサボろうかなと言うとき \"I'm thinking of skipping...\"（〜をサボろうか迷い中）",
        dialogue: [
          {
            english: "Is attendance strict for the next class?",
            japanese: "次の授業、出席きびしい？",
            reading: "イズ アッテンダンス ストリクト フォー ザ ネクスト クラス？",
          },
          {
            english: "I'm thinking of skipping the next class. I'm too tired.",
            japanese: "次の授業サボろうか迷い中…眠すぎる",
            reading: "アイム シンキング オブ スキッピング ザ ネクスト クラス。 アイム トゥー タイアード",
          }
        ],
      },
      {
        usage: "サボっちゃダメだよと引き止めるとき \"Don't skip.\"（サボりなさんな）",
        dialogue: [
          {
            english: "Maybe I'll skip class today.",
            japanese: "今日サボっちゃおうかな",
            reading: "メイビー アイル スキップ クラス トゥデイ",
          },
          {
            english: "Don't skip! We have a quiz today.",
            japanese: "サボっちゃダメだって！今日小テストあるよ",
            reading: "ドント スキップ！ ウィー ハヴ ア クイズ トゥデイ",
          }
        ],
      }
    ],
  },
  {
    id: 74,
    category: "class-discussion",
    meaning: "（アイデアなどが）ひらめく、ピンとくる、納得がいく",
    word: "Click",
    reading: "クリック",
    patterns: [
      {
        usage: "急に理解できたとき \"It finally clicked!\"（やっとピンときた！/理解できた！）",
        dialogue: [
          {
            english: "Did you understand the professor's explanation?",
            japanese: "先生の説明、分かった？",
            reading: "ディド ユー アンダースタンド ザ プロフェッサーズ エクスプレネーション？",
          },
          {
            english: "Yes! It finally clicked after you explained it.",
            japanese: "うん！君が説明してくれてやっとピンときたわ！",
            reading: "イエス！ イット ファイナリー クリックド アフター ユー エクスプレインド イット",
          }
        ],
      },
      {
        usage: "いまいち腑に落ちないとき \"It doesn't click.\"（なんかピンとこない）",
        dialogue: [
          {
            english: "What do you think of this formula?",
            japanese: "この数式、どう思う？",
            reading: "ワット ドゥ ユー シンク オブ ディス フォーミュラ？",
          },
          {
            english: "Hmm, it just doesn't click for me yet.",
            japanese: "うーん、まだなんか自分の中でピンとこないんだよね",
            reading: "ハム、 イット ジャスト ドゥズント クリック フォー ミー イエット",
          }
        ],
      }
    ],
  },
  {
    id: 75,
    category: "class-discussion",
    meaning: "〜を理解する、把握する、解決する",
    word: "Figure out",
    reading: "フィギュア アウト",
    patterns: [
      {
        usage: "やり方を理解しようとしているとき \"I'm trying to figure out...\"（〜をなんとか理解しようとしてる）",
        dialogue: [
          {
            english: "This app's settings are tricky.",
            japanese: "このアプリの設定、難しいね",
            reading: "ディス アップズ セッティングズ アー トリッキー",
          },
          {
            english: "I'm trying to figure out how to use it.",
            japanese: "今がんばって使い方を理解しようとしてるんだ",
            reading: "アイム トライイング トゥ フィギュア アウト ハウ トゥ ユーズ イット",
          }
        ],
      },
      {
        usage: "分かった！と言いたいとき \"I figured it out!\"（やり方が分かったぞ！）",
        dialogue: [
          {
            english: "Did you fix the error?",
            japanese: "エラー直った？",
            reading: "ディド ユー フィックス ザ エラー？",
          },
          {
            english: "Yes, I figured it out with Cursor!",
            japanese: "うん、Cursorを使ってなんとか解決したよ！",
            reading: "イエス、 アイ フィギュアド イット アウト ウィズ カーソル！",
          }
        ],
      }
    ],
  },
  {
    id: 76,
    category: "class-discussion",
    meaning: "気が散る、集中できない、上の空である",
    word: "Distracted",
    reading: "ディストラクティッド",
    patterns: [
      {
        usage: "スマホなどのせいで集中できないとき \"I get distracted by...\"（〜のせいで気が散っちゃう）",
        dialogue: [
          {
            english: "Are you making progress on the assignment?",
            japanese: "課題進んでる？",
            reading: "アー ユー メイキング プログレス オン ザ アサインメント？",
          },
          {
            english: "No, I keep getting distracted by Instagram!",
            japanese: "ううん、インスタのせいでずっと気が散っちゃってダメだ！",
            reading: "ノー、 アイ キープ ゲッティング ディストラクテッド バイ インスタグラム！",
          }
        ],
      },
      {
        usage: "集中しなきゃと言うとき \"Stop getting distracted.\"（集中しなよ！）",
        dialogue: [
          {
            english: "Oh, did you see that video?",
            japanese: "あ、あの動画見た？",
            reading: "オー, ディド ユー シー ザット ヴィデオ？",
          },
          {
            english: "Hey, stop getting distracted and let's focus!",
            japanese: "ちょっと、上の空になってないで集中しよ！",
            reading: "ヘイ、 ストップ ゲッティング ディストラクテッド アンド レッツ フォーカス！",
          }
        ],
      }
    ],
  },
  {
    id: 77,
    category: "class-discussion",
    meaning: "完全に圧倒される、キャパオーバーになる（★課題が多すぎてテンパってるとき）",
    word: "Overwhelmed",
    reading: "オーヴァーウェルムド",
    patterns: [
      {
        usage: "キャパオーバーなとき \"I'm overwhelmed by...\"（〜でパニック寸前だよ）",
        dialogue: [
          {
            english: "I'm taking five classes this semester.",
            japanese: "今学期、5つの授業取ってるんだ",
            reading: "アイム テイキング ファイヴ クラスズ ディス セメスター",
          },
          {
            english: "Wow, I would be overwhelmed by that!",
            japanese: "わお、私ならそれキャパオーバーで死んじゃう！",
            reading: "ワウ、 アイ ウッド ビー オーヴァーウェルムド バイ ザット！",
          }
        ],
      },
      {
        usage: "大丈夫だよと励ますとき \"Don't feel overwhelmed.\"（焦らないで、落ち着いて）",
        dialogue: [
          {
            english: "There's so much homework, I don't know where to start...",
            japanese: "課題が多すぎて何からやればいいか…",
            reading: "ゼアズ ソー マッチ ホームワーク, アイ ドント ノウ ウェア トゥ スタート...",
          },
          {
            english: "Take it easy, don't feel overwhelmed.",
            japanese: "気楽にいこう、焦らなくて大丈夫だよ",
            reading: "テイク イット イージー、 ドント フィール オーヴァーウェルムド",
          }
        ],
      }
    ],
  },
  {
    id: 78,
    category: "class-discussion",
    meaning: "〜に遅れをとる、遅れる（★クラスの流れや課題提出に遅れそうな時）",
    word: "Fall behind",
    reading: "フォール ビハインド",
    patterns: [
      {
        usage: "遅れそうで焦るとき \"I'm falling behind.\"（周りから遅れていってる…）",
        dialogue: [
          {
            english: "Isn't the class pace fast lately?",
            japanese: "最近の授業、スピード早くない？",
            reading: "イズント ザ クラス ペイス ファスト レイタリー？",
          },
          {
            english: "Yeah, I'm falling behind in this class.",
            japanese: "うん、この授業ちょっとついていけなくなってきた…",
            reading: "イェア、 アイム フォーリング ビハインド イン ディス クラス",
          }
        ],
      },
      {
        usage: "遅れないようにしようと言うとき \"Don't fall behind.\"（遅れずについていこう）",
        dialogue: [
          {
            english: "Maybe I'll take it easy this week.",
            japanese: "今週はちょっとのんびりしようかな",
            reading: "メイビー アイル テイク イット イージー ディス ウィーク",
          },
          {
            english: "Make sure you don't fall behind on the reading.",
            japanese: "リーディングの課題、遅れないように気をつけなよ",
            reading: "メイク シュア ユー ドント フォール ビハインド オン ザ リーディング",
          }
        ],
      }
    ],
  },
  {
    id: 79,
    category: "class-discussion",
    meaning: "〜のコツを掴む、慣れる（★新しいツールや習慣に慣れてきたときの定番）",
    word: "Get the hang of...",
    reading: "ゲット ザ ハング オブ",
    patterns: [
      {
        usage: "慣れてきたよと言うとき \"I'm getting the hang of...\"（〜のコツを掴んできたよ）",
        dialogue: [
          {
            english: "Did you learn the Cursor shortcuts?",
            japanese: "Cursorのショートカット覚えた？",
            reading: "ディド ユー ラーン ザ カーソル ショートカット？",
          },
          {
            english: "Yeah, I'm finally getting the hang of it!",
            japanese: "うん、やっとコツを掴んできた感じ！",
            reading: "イェア、 アイム ファイナリー ゲッティング ザ ハング オブ イット！",
          }
        ],
      },
      {
        usage: "まだ慣れないとき \"I can't get the hang of...\"（なかなか慣れない）",
        dialogue: [
          {
            english: "How's the new Mac?",
            japanese: "新しいMacの操作どう？",
            reading: "ハウズ ザ ニュー マック？",
          },
          {
            english: "I still can't get the hang of the trackpad.",
            japanese: "トラックパッドの操作にまだ全然慣れないんだよね",
            reading: "アイ スティル キャント ゲット ザ ハング オブ ザ トラックパッド",
          }
        ],
      }
    ],
  },
  {
    id: 80,
    category: "class-discussion",
    meaning: "気楽にやる、無理をしない（★疲れてる友達に「無理すんなよ」と声をかける時）",
    word: "Take it easy",
    reading: "テイク イット イージー",
    patterns: [
      {
        usage: "がんばりすぎな友達を気遣うとき \"You should take it easy.\"（ちょっと息抜きしなよ/気楽にね）",
        dialogue: [
          {
            english: "I'm gonna pull an all-nighter programming tonight!",
            japanese: "今夜も徹夜でプログラミングする！",
            reading: "アイム ゴナ プル アン オール ナイター プログラミング トゥナイト！",
          },
          {
            english: "Hey, you should take it easy or you'll get sick.",
            japanese: "おいおい、無理しすぎないで少し休みなよ",
            reading: "ヘイ、 ユー シュッド テイク イット イージー オー ユール ゲット シック",
          }
        ],
      },
      {
        usage: "別れ際の挨拶として \"Take it easy!\"（じゃあね！/またね！）",
        dialogue: [
          {
            english: "Okay, I'm heading to my next class.",
            japanese: "じゃあ私、次の教室行くね",
            reading: "オーケイ, アイム ヘディング トゥ マイ ネクスト クラス",
          },
          {
            english: "Okay, take it easy!",
            japanese: "了解、またね〜！",
            reading: "オーケイ、 テイク イット イージー！",
          }
        ],
      }
    ],
  },
  {
    id: 81,
    category: "class-discussion",
    meaning: "気が合う、意気投合する（★クラスで新しい友達と一瞬で仲良くなれたとき）",
    word: "Hit it off",
    reading: "ヒット イット オフ",
    patterns: [
      {
        usage: "すぐに仲良くなったとき \"We really hit it off.\"（私たちはすごく意気投合したんだ）",
        dialogue: [
          {
            english: "What were you talking about with the person next to you?",
            japanese: "隣の席の子と何話してたの？",
            reading: "ワット ワー ユー トーキング アバウト ウィズ ザ パーソン ネクスト トゥ ユー？",
          },
          {
            english: "We really hit it off talking about AI!",
            japanese: "AIの話でめちゃくちゃ意気投合しちゃってさ！",
            reading: "ウィー リアリー ヒット イット オフ トーキング アバウト エーアイ！",
          }
        ],
      },
      {
        usage: "彼ら仲良いねと言うとき \"They hit it off.\"（あの2人、すっかり仲良しだね）",
        dialogue: [
          {
            english: "Tom and Ken have been talking forever.",
            japanese: "トムとケン、ずっと喋ってるね",
            reading: "トム アンド ケン ハヴ ビーン トーキング フォーエヴァー",
          },
          {
            english: "Yeah, they hit it off instantly.",
            japanese: "ね、会ってすぐに意気投合したみたい",
            reading: "イェア、 ゼイ ヒット イット オフ インスタントリー",
          }
        ],
      }
    ],
  },
  {
    id: 82,
    category: "class-discussion",
    meaning: "（学校やカフェなどの）特定の場所に集まる、足を運ぶ",
    word: "Head over to...",
    reading: "ヘッド オーヴァー トゥー",
    patterns: [
      {
        usage: "このあと〜に行こうと誘うとき \"Let's head over to...\"（〜に向かおうよ）",
        dialogue: [
          {
            english: "What should we do after class?",
            japanese: "授業終わったらどうする？",
            reading: "ワット シュッド ウィー ドゥ アフター クラス？",
          },
          {
            english: "Let's head over to the library to study.",
            japanese: "図書室に移動して勉強しようよ！",
            reading: "レッツ ヘッド オーヴァー トゥ ザ ライブラリー トゥ スタディ",
          }
        ],
      },
      {
        usage: "今から行くよというとき \"I'm heading over to...\"（今から〜に向かうところ）",
        dialogue: [
          {
            english: "Where are you now?",
            japanese: "今どこ？",
            reading: "ウェア アー ユー ナウ？",
          },
          {
            english: "I'm heading over to your classroom right now.",
            japanese: "今そっちの教室に向かってるところだよ",
            reading: "アイム ヘディング オーヴァー トゥ ユア クラスルーム ライト ナウ",
          }
        ],
      }
    ],
  },
  {
    id: 83,
    category: "class-discussion",
    meaning: "〜をよく考える、ブレストした後にアイデアをまとめる",
    word: "Brainstorm / Flesh out",
    reading: "ブレインストーム / フレッシュ アウト",
    patterns: [
      {
        usage: "アイデアを具体的に肉付けするとき \"Flesh out the idea\"（アイデアを形にする）",
        dialogue: [
          {
            english: "We picked the app theme, but...",
            japanese: "アプリのテーマは決まったけど…",
            reading: "ウィー ピックド ザ アップ シーム, バット...",
          },
          {
            english: "Let's flesh out the details together.",
            japanese: "ここから一緒に詳細を具体的に詰めていこう！",
            reading: "レッツ フレッシュ アウト ザ ディテールズ トゥゲザー",
          }
        ],
      },
      {
        usage: "もっと中身を濃くしたいとき \"Needs to be fleshed out\"（もっと練り直す必要がある）",
        dialogue: [
          {
            english: "Can I submit this proposal to the professor?",
            japanese: "この企画書で先生に出していいかな？",
            reading: "キャン アイ サブミット ディス プロポーザル トゥ ザ プロフェッサー？",
          },
          {
            english: "It's a bit short, it needs to be fleshed out.",
            japanese: "ちょっと薄いから、もっと中身を練った方がいいかも",
            reading: "イッツ ア ビット ショート、 イット ニーズ トゥ ビー フレッシュド アウト",
          }
        ],
      }
    ],
  },
  {
    id: 84,
    category: "class-discussion",
    meaning: "〜に参加する、加わる（★グループワークや雑談の輪に入る時）",
    word: "Join in",
    reading: "ジョイン イン",
    patterns: [
      {
        usage: "仲間に入りたいとき \"Can I join in?\"（私も中に入っていい？）",
        dialogue: [
          {
            english: "We're all talking about this new AI tool.",
            japanese: "みんなで新しいAIツールの話をしてるんだ",
            reading: "ウィーアー オール トーキング アバウト ディス ニュー エーアイ ツール",
          },
          {
            english: "Sounds fun! Can I join in?",
            japanese: "楽しそう！私も混ぜてもらっていい？",
            reading: "サウンズ ファン！ キャン アイ ジョイン イン？",
          }
        ],
      },
      {
        usage: "おいでよと誘うとき \"Feel free to join in.\"（遠慮なく混ざりなよ）",
        dialogue: [
          {
            english: "Oh, if I'm not interrupting...",
            japanese: "あ、お邪魔じゃなければ…",
            reading: "オー, イフ アイム ナット インタラプティング...",
          },
          {
            english: "Don't be shy, feel free to join in!",
            japanese: "恥ずかしがらないで、ほら混ざりなよ！",
            reading: "ドント ビー シャイ、 フィール フリー トゥ ジョイン イン！",
          }
        ],
      }
    ],
  },
  {
    id: 85,
    category: "class-discussion",
    meaning: "共通の、お互いに持っている（★共通の趣味が見つかって一気に距離が縮まる時）",
    word: "In common",
    reading: "イン コモン",
    patterns: [
      {
        usage: "共通点があるとき \"We have a lot in common.\"（私たち共通点めっちゃあるね！）",
        dialogue: [
          {
            english: "You like gadgets AND baking is your hobby?",
            japanese: "君もガジェット好きで、しかもパン作りが趣味なの？",
            reading: "ユー ライク ガジェット アンド ベイキング イズ ユア ホビー？",
          },
          {
            english: "Wow, we have a lot in common!",
            japanese: "うわあ、うちら共通点多すぎでしょ！",
            reading: "ワウ、 ウィー ハヴ ア ロット イン コモン！",
          }
        ],
      },
      {
        usage: "共通点が何もないとき \"Nothing in common\"（これっぽっちも共通点がない）",
        dialogue: [
          {
            english: "I can't keep a conversation going with that pair.",
            japanese: "あのペアの人と会話が続かないんだ",
            reading: "アイ キャント キープ ア カンヴァセーション ゴーイング ウィズ ザット ペア",
          },
          {
            english: "Do you guys have nothing in common?",
            japanese: "共通の話題がマジで何もない感じ？",
            reading: "ドゥ ユー ガイズ ハヴ ナッシング イン コモン？",
          }
        ],
      }
    ],
  },
  {
    id: 86,
    category: "class-discussion",
    meaning: "〜を頼りにする、当てにする（★「困ったら私を頼って！」と言う時）",
    word: "Count on...",
    reading: "カウント オン",
    patterns: [
      {
        usage: "任せて！と言いたいとき \"You can count on me.\"（私に任せといて！/頼りにしていいよ）",
        dialogue: [
          {
            english: "I'm nervous about whether I can do this English presentation well.",
            japanese: "この英語の発表、うまくできるか緊張する",
            reading: "アイム ナーヴァス アバウト ウェザー アイ キャン ドゥ ディス イングリッシュ プレゼンテーション ウェル",
          },
          {
            english: "Don't worry, you can count on me for help!",
            japanese: "大丈夫、私がサポートするから任せといて！",
            reading: "ドント ウォリー、 ユー キャン カウント オン ミー フォー ヘルプ！",
          }
        ],
      },
      {
        usage: "相手を信頼して頼るとき \"I'm counting on you.\"（頼りにしてるよ）",
        dialogue: [
          {
            english: "Can you fix this Cursor code error?",
            japanese: "Cursorのコードエラー直してくれる？",
            reading: "キャン ユー フィックス ディス カーソル コード エラー？",
          },
          {
            english: "Sure.",
            japanese: "いいよ。",
            reading: "シュア。",
          },
          {
            english: "I'm counting on you!",
            japanese: "頼りにしてるよ、頼むね！",
            reading: "アイム カウントィング オン ユー！",
          }
        ],
      }
    ],
  },
  {
    id: 87,
    category: "class-discussion",
    meaning: "（課題などの）進捗、進み具合",
    word: "Progress",
    reading: "プログレス",
    patterns: [
      {
        usage: "進み具合を聞くとき \"Any progress?\"（進んでる？/進捗どう？）",
        dialogue: [
          {
            english: "How's the group work coming along?",
            japanese: "グループワークの進み具合はどう？",
            reading: "ハウズ ザ グループ ワーク カミング アロング？",
          },
          {
            english: "Any progress on your slide?",
            japanese: "スライドの作成、進んでる？",
            reading: "エニ プログレス オン ユア スライド？",
          }
        ],
      },
      {
        usage: "順調だと言うとき \"Making good progress\"（いい感じに進んでる）",
        dialogue: [
          {
            english: "How's the app development going?",
            japanese: "アプリ開発はどう？",
            reading: "ハウズ ザ アップ デヴェロップメント ゴーイング？",
          },
          {
            english: "We are making good progress thanks to Cursor!",
            japanese: "Cursorのおかげでめちゃくちゃ順調に進んでるよ！",
            reading: "ウィー アー メイキング グッド プログレス サンクス トゥ カーソル！",
          }
        ],
      }
    ],
  },
  {
    id: 88,
    category: "class-discussion",
    meaning: "同じ状況にある、お互い様である（★「課題終わってないの？私も！」という時）",
    word: "In the same boat",
    reading: "イン ザ セイム ボート",
    patterns: [
      {
        usage: "お互い大変だよねと同情するとき \"We're in the same boat.\"（うちら同じ穴の狢（同じ状況）だね）",
        dialogue: [
          {
            english: "I haven't studied at all for tomorrow's test, I'm gonna die.",
            japanese: "明日のテスト、全く勉強してなくて死にそう",
            reading: "アイ ハヴント スタディド アット オール フォー トゥモローズ テスト, アイム ゴナ ダイ",
          },
          {
            english: "Don't worry, we're in the same boat!",
            japanese: "安心しな、私も全くやってないから同じ状況だよ！笑",
            reading: "ドント ウォリー、 ウィーアー イン ザ セイム ボート！",
          }
        ],
      },
      {
        usage: "みんな一緒だよと言うとき \"Everyone is in the same boat.\"（みんな大変なのは一緒だよ）",
        dialogue: [
          {
            english: "There's so much homework, it's rough.",
            japanese: "課題が多くて辛いな",
            reading: "ゼアズ ソー マッチ ホームワーク, イッツ ラフ",
          },
          {
            english: "Everyone in class is in the same boat.",
            japanese: "クラスのみんな同じ状況だから、一緒に頑張ろう",
            reading: "エヴリワン イン クラス イズ イン ザ セイム ボート",
          }
        ],
      }
    ],
  },
  {
    id: 89,
    category: "class-discussion",
    meaning: "〜を締めくくる、終わらせる（★今日のグループワークを「ここまでにして終わろう」という時）",
    word: "Wrap up",
    reading: "ラップ アップ",
    patterns: [
      {
        usage: "作業を切り上げるとき \"Let's wrap up.\"（この辺で切り上げよう/終わりにしよう）",
        dialogue: [
          {
            english: "The bell's gonna ring soon.",
            japanese: "もうすぐチャイムが鳴るね",
            reading: "ザ ベルズ ゴナ リング スーン",
          },
          {
            english: "Okay, let's wrap up our discussion for today.",
            japanese: "よし、今日のディスカッションはこの辺で終わりにしよう",
            reading: "オーケイ、 レッツ ラップ アップ アワ ディスカッション フォー トゥデイ",
          }
        ],
      },
      {
        usage: "最後のまとめをするとき \"Just wrapping up\"（ちょうどまとめをしてる段階）",
        dialogue: [
          {
            english: "Aren't you done yet?",
            japanese: "まだ作業終わらない？",
            reading: "アーント ユー ダン イエット？",
          },
          {
            english: "We're just wrapping up the final slide.",
            japanese: "今ちょうど最後のスライドをまとめて仕上げてるところだよ",
            reading: "ウィーアー ジャスト ラッピング アップ ザ ファイナル スライド",
          }
        ],
      }
    ],
  },
  {
    id: 90,
    category: "class-discussion",
    meaning: "（意見などを）お互いに交換し合う、ぶつけ合う（★アイデアを「パスし合う」イメージ）",
    word: "Bounce ideas off each other",
    reading: "バウンス アイデアズ オフ イーチ アザー",
    patterns: [
      {
        usage: "意見を交わし合おうと言うとき \"Let's bounce ideas off each other.\"（お互いアイデアを出し合って相談しよう）",
        dialogue: [
          {
            english: "I can't think of an idea for the next project.",
            japanese: "次のプロジェクトのネタが思いつかないな",
            reading: "アイ キャント シンク オブ アン アイデア フォー ザ ネクスト プロジェクト",
          },
          {
            english: "Let's bounce ideas off each other over lunch!",
            japanese: "ランチ食べながらお互いアイデアを出し合って相談しようよ！",
            reading: "レッツ バウンス アイデアズ オフ イーチ アザー オーヴァー ランチ！",
          }
        ],
      },
      {
        usage: "壁打ち相手になってほしいとき \"Bounce an idea off you\"（ちょっと意見を聞かせてほしい）",
        dialogue: [
          {
            english: "Got a minute?",
            japanese: "ちょっといい？",
            reading: "ガット ア ミニット？",
          },
          {
            english: "Can I bounce a quick idea off you?",
            japanese: "ちょっと新しいアイデア思いついたから、意見聞かせてもらってもいい？",
            reading: "キャン アイ バウンス ア クイック アイデア オフ ユー？",
          }
        ],
      }
    ],
  },
  {
    id: 91,
    category: "daily-conversation",
    meaning: "割り勘にする、支払いを分ける（★カフェやレストランでの会計時に最頻出）",
    word: "Split the bill / Split it",
    reading: "スプリット ザ ビル / スプリット イット",
    patterns: [
      {
        usage: "割り勘にしようと提案するとき \"Let's split the bill.\"（割り勘にしよう！）",
        dialogue: [
          {
            english: "I got the check for all of us.",
            japanese: "会計まとめて来ちゃったね",
            reading: "アイ ガット ザ チェック フォー オール オブ アス",
          },
          {
            english: "Don't worry, let's split the bill!",
            japanese: "気にしないで、割り勘にしよう！",
            reading: "ドント ウォリー、 レッツ スプリット ザ ビル！",
          }
        ],
      },
      {
        usage: "きれいに半分に分けるとき \"Split it half and half\"（きれいに半分ずつにしよう）",
        dialogue: [
          {
            english: "It's 20 dollars for the two of us.",
            japanese: "2人で20ドルだね",
            reading: "イッツ 20 ダラーズ フォー ザ トゥー オブ アス",
          },
          {
            english: "Let's just split it half and half.",
            japanese: "1人10ドルずつ、きれいに半分に分けよう",
            reading: "レッツ ジャスト スプリット イット ハーフ アンド ハーフ",
          }
        ],
      }
    ],
  },
  {
    id: 92,
    category: "daily-conversation",
    meaning: "（食べ物などが）とても美味しい、最高（★Deliciousよりフランクで日常的な表現）",
    word: "Tasty",
    reading: "テイスティ",
    patterns: [
      {
        usage: "食べた瞬間に美味しいと言うとき \"This is so tasty!\"（これめっちゃ美味しい！）",
        dialogue: [
          {
            english: "How's that butter roll?",
            japanese: "その塩バターロールどう？",
            reading: "ハウズ ザット バター ロール？",
          },
          {
            english: "Oh my god, this is so tasty! You should try it.",
            japanese: "うわ、これめっちゃ美味しい！君も食べてみなよ！",
            reading: "オー マイ ゴッド、 ディス イズ ソー テイスティ！ ユー シュッド トライ イット",
          }
        ],
      },
      {
        usage: "美味しいお店を紹介するとき \"Tasty food\"（美味しいご飯）",
        dialogue: [
          {
            english: "Did you know a new place opened near the station?",
            japanese: "駅の近くに新しいお店できたの知ってる？",
            reading: "ディド ユー ノウ ア ニュー プレイス オープンド ニア ザ ステーション？",
          },
          {
            english: "Yeah, they have really tasty food!",
            japanese: "知ってる、あそこ本当に美味しいご飯出すよね！",
            reading: "イェア, ゼイ ハヴ リアリー テイスティ フード！",
          }
        ],
      }
    ],
  },
  {
    id: 93,
    category: "daily-conversation",
    meaning: "（お店の料理や量が）大満足の、ボリュームがある、ホッとするような",
    word: "Hearty",
    reading: "ハーティ",
    patterns: [
      {
        usage: "ボリューム満点の食事を褒めるとき \"A hearty meal\"（ボリュームがあって大満足のご飯）",
        dialogue: [
          {
            english: "The soup here is chunky and delicious.",
            japanese: "ここのスープ、具だくさんで美味しいね",
            reading: "ザ スープ ヒア イズ チャンキー アンド デリシャス",
          },
          {
            english: "Yeah, it's a very hearty soup, perfect for winter!",
            japanese: "ね、具だくさんで大満足のスープだよね、冬にぴったり！",
            reading: "イェア, イッツ ア ヴェリー ハーティ スープ, パーフェクト フォー ウィンター！",
          }
        ],
      },
      {
        usage: "ガッツリ食べたいとき \"Something hearty\"（しっかりしたものが食べたい）",
        dialogue: [
          {
            english: "I'm starving.",
            japanese: "お腹ペコペコだわ",
            reading: "アイム スターヴィング",
          },
          {
            english: "Let's get something hearty like yakiniku!",
            japanese: "焼肉みたいにガッツリ食べ応えあるものにしよう！",
            reading: "レッツ ゲット サムシング ハーティ ライク ヤキニク！",
          }
        ],
      }
    ],
  },
  {
    id: 94,
    category: "daily-conversation",
    meaning: "（味や匂い、食感などが）濃厚な、コクがある、リッチな",
    word: "Rich",
    reading: "リッチ",
    patterns: [
      {
        usage: "バターやクリーム、チョコが濃厚なとき \"It's so rich.\"（すごく濃厚でコクがあるね）",
        dialogue: [
          {
            english: "How's this chocolate cake?",
            japanese: "このチョコレートケーキ、どう？",
            reading: "ハウズ ディス チョコレート ケイク？",
          },
          {
            english: "Wow, it's so rich and delicious!",
            japanese: "わお、すごく濃厚で美味しい！",
            reading: "ワウ, イッツ ソー リッチ アンド デリシャス！",
          }
        ],
      },
      {
        usage: "スープやソースが濃厚なとき \"Rich flavor\"（濃厚な味わい）",
        dialogue: [
          {
            english: "This ramen broth is incredible.",
            japanese: "このラーメンのスープ、すごいね",
            reading: "ディス ラーメン ブロス イズ インクレディブル",
          },
          {
            english: "Yeah, it has a very rich flavor.",
            japanese: "ね、すごくコクがあって濃厚な味わいだよね",
            reading: "イェア, イット ハズ ア ヴェリー リッチ フレーヴァー",
          }
        ],
      }
    ],
  },
  {
    id: 95,
    category: "daily-conversation",
    meaning: "〜に立ち寄る、ひょっこり顔を出す（★予定になかった場所に「ちょっと寄ろうよ」の時）",
    word: "Pop into...",
    reading: "ポップ イントゥー",
    patterns: [
      {
        usage: "お店にちょっと寄りたいとき \"Let's pop into...\"（〜にちょっと入ってみようよ）",
        dialogue: [
          {
            english: "There's a cute gift shop over there!",
            japanese: "あそこに可愛い雑貨屋さんがある！",
            reading: "ゼアズ ア キュート ギフト ショップ オーヴァー ゼア！",
          },
          {
            english: "Let's pop into the shop for a minute.",
            japanese: "ちょっとあのお店に入ってみようよ！",
            reading: "レッツ ポップ イントゥ ザ ショップ フォー ア ミニット",
          }
        ],
      },
      {
        usage: "帰り道に寄る予定のとき \"Pop into the cafe\"（カフェにサッと寄る）",
        dialogue: [
          {
            english: "Are you going straight home after this?",
            japanese: "このあと真っ直ぐ帰る？",
            reading: "アー ユー ゴーイング ストレート ホーム アフター ディス？",
          },
          {
            english: "No, I'm gonna pop into the cafe first.",
            japanese: "ううん、先にカフェにちょっと寄ってから帰るよ",
            reading: "ノー, アイム ゴナ ポップ イントゥ ザ カフェ ファースト",
          }
        ],
      }
    ],
  },
  {
    id: 96,
    category: "daily-conversation",
    meaning: "〜をお持ち帰りにする（★カフェやファストフードで「持ち帰りで！」と言う時）",
    word: "To go",
    reading: "トゥー ゴー",
    patterns: [
      {
        usage: "注文時に持ち帰りと伝えるとき \"To go, please.\"（持ち帰りでお願いします）",
        dialogue: [
          {
            english: "For here or to go?",
            japanese: "店内でお召し上がりですか？",
            reading: "フォー ヒア オア トゥ ゴー？",
          },
          {
            english: "To go, please!",
            japanese: "お持ち帰りでお願いします！",
            reading: "トゥ ゴー, プリーズ！",
          }
        ],
      },
      {
        usage: "持ち帰りにするか聞くとき \"Get it to go\"（テイクアウトにする）",
        dialogue: [
          {
            english: "The cafe's packed and there's no seats.",
            japanese: "カフェ混んでて席がないね",
            reading: "ザ カフェズ パックド アンド ゼアズ ノー シーツ",
          },
          {
            english: "Let's just get our coffee to go.",
            japanese: "カフェ混んでて座れないし、コーヒー持って帰ろっか",
            reading: "レッツ ジャスト ゲット アワ コーヒー トゥ ゴー",
          }
        ],
      }
    ],
  },
  {
    id: 97,
    category: "daily-conversation",
    meaning: "（予定や好みが）〜にぴったり合う、〜の気分である",
    word: "Suit",
    reading: "スート / スーツ",
    patterns: [
      {
        usage: "その時間が自分に都合がいいとき \"That suits me.\"（その時間、私にぴったりだよ/都合いいよ）",
        dialogue: [
          {
            english: "How about the cafe at 4 after school?",
            japanese: "放課後4時にカフェでどう？",
            reading: "ハウ アバウト ザ カフェ アット 4 アフター スクール？",
          },
          {
            english: "That suits me perfectly! See you then.",
            japanese: "その時間めちゃくちゃ都合いい！じゃあまたあとでね",
            reading: "ザット スーツ ミー パーフェクトリー！ シー ユー ゼン",
          }
        ],
      },
      {
        usage: "相手に似合っているとき \"It suits you.\"（それ似合ってるよ！）",
        dialogue: [
          {
            english: "I bought a new dress.",
            japanese: "新しいワンピース買ったんだ",
            reading: "アイ ボート ア ニュー ドレス",
          },
          {
            english: "Wow, that color really suits you!",
            japanese: "わお、その色本当に君に似合ってるよ！",
            reading: "ワウ, ザット カラー リアリー スーツ ユー！",
          }
        ],
      }
    ],
  },
  {
    id: 98,
    category: "daily-conversation",
    meaning: "〜を思いつく、ひらめく（★「いいカフェ思いついた！」という時に超使う）",
    word: "Come up with...",
    reading: "カム アップ ウィズ",
    patterns: [
      {
        usage: "良いアイデアを思いついたとき \"I came up with...\"（〜を思いついたんだ！）",
        dialogue: [
          {
            english: "Where should we go after school?",
            japanese: "放課後どこ行く？",
            reading: "ウェア シュッド ウィー ゴー アフター スクール？",
          },
          {
            english: "I just came up with a great cafe!",
            japanese: "いいカフェ思いついちゃった！",
            reading: "アイ ジャスト ケイム アップ ウィズ ア グレート カフェ！",
          }
        ],
      },
      {
        usage: "解決策を出さなきゃいけないとき \"Come up with a plan\"（計画を思いつく）",
        dialogue: [
          {
            english: "What should we do this weekend?",
            japanese: "週末の予定、どうする？",
            reading: "ワット シュッド ウィー ドゥ ディス ウィークエンド？",
          },
          {
            english: "Let's come up with a fun plan tonight.",
            japanese: "今夜みんなで楽しい計画を考えようよ",
            reading: "レッツ カム アップ ウィズ ア ファン プラン トゥナイト",
          }
        ],
      }
    ],
  },
  {
    id: 99,
    category: "daily-conversation",
    meaning: "行列、並んでいる列（★人気店やカフェの「待ちの列」のこと）",
    word: "Line",
    reading: "ライン",
    patterns: [
      {
        usage: "列に並ぶとき \"Get in line\"（列に並ぶ）",
        dialogue: [
          {
            english: "That boba shop has a huge line.",
            japanese: "あのタピオカ屋さん、すごい人だね",
            reading: "ザット ボバ ショップ ハズ ア ヒュージ ライン",
          },
          {
            english: "Let's get in line before it gets longer!",
            japanese: "これ以上長くなる前に列に並ぼう！",
            reading: "レッツ ゲット イン ライン ビフォー イット ゲツ ロンガー！",
          }
        ],
      },
      {
        usage: "並んで待っているとき \"In line\"（列に並んでいる最中）",
        dialogue: [
          {
            english: "Where are you right now?",
            japanese: "今どこにいるの？",
            reading: "ウェア アー ユー ライト ナウ？",
          },
          {
            english: "I'm waiting in line for the coffee.",
            japanese: "今コーヒー買うのに列に並んで待ってるところ",
            reading: "アイム ウェイティング イン ライン フォー ザ コーヒー",
          }
        ],
      }
    ],
  },
  {
    id: 100,
    category: "daily-conversation",
    meaning: "（無性に）〜したい気分である、〜がほしい（★Craveに並ぶ「〇〇な気分！」の定番）",
    word: "In the mood for...",
    reading: "イン ザ ムード フォー",
    patterns: [
      {
        usage: "特定の食べ物の気分のとき \"I'm in the mood for...\"（無性に〜を食べたい気分なんだ）",
        dialogue: [
          {
            english: "What should we have for dinner today?",
            japanese: "今日のご飯、何にする？",
            reading: "ワット シュッド ウィー ハヴ フォー ディナー トゥデイ？",
          },
          {
            english: "I'm in the mood for Italian food!",
            japanese: "今日はイタリアンを食べたい気分なんだよね！",
            reading: "アイム イン ザ ムード フォー イタリアン フード！",
          }
        ],
      },
      {
        usage: "映画やカラオケの気分のとき \"In the mood for a movie\"（映画を見る気分）",
        dialogue: [
          {
            english: "What do you want to do after school?",
            japanese: "放課後、何して遊ぶ？",
            reading: "ワット ドゥ ユー ワント トゥ ドゥ アフター スクール？",
          },
          {
            english: "I'm in the mood for a scary movie tonight.",
            japanese: "今夜はちょっとホラー映画を見たい気分かも",
            reading: "アイム イン ザ ムード フォー ア スケアリー ムービー トゥナイト",
          }
        ],
      }
    ],
  },
  {
    id: 101,
    category: "daily-conversation",
    meaning: "〜にとても詳しい、〜の勝手がよく分かっている（★お気に入りのお店の常連な時）",
    word: "Know one's way around...",
    reading: "ノウ ワンズ ウェイ アラウンド",
    patterns: [
      {
        usage: "その場所に詳しいとき \"I know my way around...\"（私、〜には結構詳しいよ）",
        dialogue: [
          {
            english: "There are so many cute cafes in this area.",
            japanese: "このエリア、おしゃれなカフェ多いね",
            reading: "ゼア アー ソー マニー キュート カフェズ イン ディス エリア",
          },
          {
            english: "I know my way around here, let me guide you!",
            japanese: "私この辺の勝手よく知ってるから案内するよ！",
            reading: "アイ ノウ マイ ウェイ アラウンド ヒア, レット ミー ガイド ユー！",
          }
        ],
      },
      {
        usage: "ツールに詳しいとき \"Knows his way around Cursor\"（彼はCursorの使いこなしをよく知っている）",
        dialogue: [
          {
            english: "He's fast at programming, huh?",
            japanese: "彼、プログラミング早いね",
            reading: "ヒーズ ファスト アット プログラミング, ハ？",
          },
          {
            english: "Yeah, he really knows his way around Cursor.",
            japanese: "うん、彼は本当にCursorの使いこなしをよく分かってるよね",
            reading: "イェア, ヒー リアリー ノウズ ヒズ ウェイ アラウンド カーソル",
          }
        ],
      }
    ],
  },
  {
    id: 102,
    category: "daily-conversation",
    meaning: "〜でお腹がいっぱいである、満腹だ（★「もう食べられない！」のフランクな表現）",
    word: "Stuffed",
    reading: "スタッフト",
    patterns: [
      {
        usage: "めちゃくちゃ満腹なとき \"I'm stuffed!\"（もうお腹パンパンで限界！）",
        dialogue: [
          {
            english: "Want another slice of pizza?",
            japanese: "ピザもう1枚食べる？",
            reading: "ワント アナザー スライス オブ ピザ？",
          },
          {
            english: "No thanks, I'm totally stuffed!",
            japanese: "いや、ありがとう、もうマジでお腹パンパンだわ！",
            reading: "ノー サンクス, アイム トータリー スタフト！",
          }
        ],
      },
      {
        usage: "食べすぎたとき \"So stuffed\"（お腹がいっぱいすぎる）",
        dialogue: [
          {
            english: "That pasta portion was huge.",
            japanese: "ここのパスタ、量がすごかったね",
            reading: "ザット パスタ ポーション ワズ ヒュージ",
          },
          {
            english: "Yeah, I'm so stuffed I can't even move.",
            japanese: "ね、お腹いっぱいすぎて動けないよ…笑",
            reading: "イェア, アイム ソー スタフト アイ キャント イーヴン ムーブ",
          }
        ],
      }
    ],
  },
  {
    id: 103,
    category: "daily-conversation",
    meaning: "〜を我慢する、控える、見送る（★ダイエット中やお金がない時に「今回はパス！」と言う時）",
    word: "Pass on...",
    reading: "パス オン",
    patterns: [
      {
        usage: "今回は見送ると言うとき \"I'll pass on...\"（〜はパスしておこうかな）",
        dialogue: [
          {
            english: "Should we order dessert too?",
            japanese: "デザートも注文する？",
            reading: "シュッド ウィー オーダー デザート トゥー？",
          },
          {
            english: "I think I'll pass on dessert today, I'm on a diet.",
            japanese: "今日はデザートはパスしておこうかな、ダイエット中だし",
            reading: "アイ シンク アイル パス オン デザート トゥデイ, アイム オン ア ダイエット",
          }
        ],
      },
      {
        usage: "お誘いを断るとき \"Pass on the drink\"（お酒や飲み物を見送る）",
        dialogue: [
          {
            english: "Want another cafe latte?",
            japanese: "もう1杯カフェラテ飲む？",
            reading: "ワント アナザー カフェ ラテ？",
          },
          {
            english: "I'll pass, I've had enough caffeine.",
            japanese: "私はパスしとく、カフェインもう十分摂ったから笑",
            reading: "アイル パス, アイヴ ハッド イナフ カフェイン",
          }
        ],
      }
    ],
  },
  {
    id: 104,
    category: "daily-conversation",
    meaning: "大評判の、今めちゃくちゃ話題の（★SNSでバズってるお店やツールを指す言葉）",
    word: "Buzzing",
    reading: "バズィング",
    patterns: [
      {
        usage: "今話題のお店だと言うとき \"The cafe is buzzing.\"（あのカフェ、今めちゃくちゃ話題だよ）",
        dialogue: [
          {
            english: "That new Italian place has been crowded lately.",
            japanese: "最近あの新しいイタリアン、人多いね",
            reading: "ザット ニュー イタリアン プレイス ハズ ビーン クラウデッド レイタリー",
          },
          {
            english: "Yeah, that restaurant is buzzing on Instagram right now.",
            japanese: "うん、あそこ今インスタでめちゃくちゃバズって話題だからね",
            reading: "イェア, ザット レストラン イズ バジング オン インスタグラム ライト ナウ",
          }
        ],
      },
      {
        usage: "噂になっているとき \"Buzzing with excitement\"（ワクワクで盛り上がっている）",
        dialogue: [
          {
            english: "The new AI tool is blowing up on Discord overseas.",
            japanese: "新しいAIツール、海外のDiscordですごいね",
            reading: "ザ ニュー エーアイ ツール イズ ブローイング アップ オン ディスコード オーヴァーシーズ",
          },
          {
            english: "The whole community is buzzing about it.",
            japanese: "コミュニティ全体がその話題で持ちきりだよ",
            reading: "ザ ホール コミュニティ イズ バジング アバウト イット",
          }
        ],
      }
    ],
  },
  {
    id: 105,
    category: "daily-conversation",
    meaning: "〜をちらっと見る、チェックする（★「あの店ちょっと見てみようよ」という時）",
    word: "Take a glance at...",
    reading: "テイク ア グランス アット",
    patterns: [
      {
        usage: "お店のメニューなどをチラ見するとき \"Let's take a glance at...\"（〜をちょっと見てみようよ）",
        dialogue: [
          {
            english: "Does this restaurant look expensive?",
            japanese: "ここのレストラン、高そうかな？",
            reading: "ダズ ディス レストラン ルック エクスペンシヴ？",
          },
          {
            english: "Let's take a glance at the menu outside.",
            japanese: "外にあるメニューをちょっとチラ見してみようよ",
            reading: "レッツ テイク ア グランス アット ザ メニュー アウトサイド",
          }
        ],
      },
      {
        usage: "スマホの画面などを見せるとき \"Take a quick glance\"（一瞬パッと見る）",
        dialogue: [
          {
            english: "What do you think of this prompt?",
            japanese: "このプロンプト、どう思う？",
            reading: "ワット ドゥ ユー シンク オブ ディス プロンプト？",
          },
          {
            english: "Let me take a quick glance at it.",
            japanese: "どれ、ちょっとチラッと見せてみて",
            reading: "レット ミー テイク ア クイック グランス アット イット",
          }
        ],
      }
    ],
  },
  {
    id: 106,
    category: "daily-conversation",
    meaning: "〜を心待ちにする、楽しみにする（★次のお出かけの約束の時の締めの一言）",
    word: "Look forward to...",
    reading: "ルック フォーワード トゥー",
    patterns: [
      {
        usage: "次の予定を楽しみにするとき \"I'm looking forward to...\"（〜をめっちゃ楽しみにしてる！）",
        dialogue: [
          {
            english: "Okay, let's go to that cafe this weekend!",
            japanese: "じゃあ、今週末あのカフェに行こうね！",
            reading: "オーケイ, レッツ ゴー トゥ ザット カフェ ディス ウィークエンド！",
          },
          {
            english: "Yes! I'm really looking forward to it!",
            japanese: "うん！本当にめちゃくちゃ楽しみにしてる！",
            reading: "イエス！ アイム リアリー ルッキング フォーワード トゥ イット！",
          }
        ],
      },
      {
        usage: "また遊ぼうねと言うとき \"Looking forward to hanging out again\"（また遊ぶのを楽しみにしてる）",
        dialogue: [
          {
            english: "Today was fun, thanks!",
            japanese: "今日は楽しかった、ありがとう！",
            reading: "トゥデイ ワズ ファン, サンクス！",
          },
          {
            english: "Me too! Looking forward to hanging out again soon!",
            japanese: "私こそ！近いうちにまた遊べるの楽しみにしてるね！",
            reading: "ミー トゥー！ ルッキング フォーワード トゥ ハンギング アウト アゲイン スーン！",
          }
        ],
      }
    ],
  },
  {
    id: 107,
    category: "daily-conversation",
    meaning: "素晴らしい、完璧な、これ以上ない（★お気に入りのお店やご飯を大絶賛する時）",
    word: "Flawless",
    reading: "フローレス",
    patterns: [
      {
        usage: "ご飯やサービスが完璧なとき \"The food was flawless.\"（料理が本当に完璧だった）",
        dialogue: [
          {
            english: "How was that French restaurant earlier?",
            japanese: "さっきのフレンチレストランどうだった？",
            reading: "ハウ ワズ ザット フレンチ レストラン アーリアー？",
          },
          {
            english: "The food and service were absolutely flawless!",
            japanese: "料理もサービスも本当に完璧で最高だったよ！",
            reading: "ザ フード アンド サービス ワー アブソルートリー フローレス！",
          }
        ],
      },
      {
        usage: "デザインやコードに無駄がないとき \"Flawless design\"（完璧なデザイン）",
        dialogue: [
          {
            english: "The UI Cursor made has no bugs.",
            japanese: "Cursorが作ってくれたUI、バグがないね",
            reading: "ザ ユーアイ カーソル メイド ハズ ノー バグズ",
          },
          {
            english: "Wow, it's a flawless design.",
            japanese: "わお、完璧なデザインだね",
            reading: "ワウ, イッツ ア フローレス デザイン",
          }
        ],
      }
    ],
  },
  {
    id: 108,
    category: "daily-conversation",
    meaning: "〜に立ち寄る、ちょっと顔を出す（★Pop intoと並ぶ「サクッと寄る」の定番表現）",
    word: "Drop by...",
    reading: "ドロップ バイ",
    patterns: [
      {
        usage: "帰り道にどこかに寄るとき \"Let's drop by...\"（〜にちょっと立ち寄ろうよ）",
        dialogue: [
          {
            english: "I'm thirsty.",
            japanese: "喉乾いたね",
            reading: "アイム サースティ",
          },
          {
            english: "Let's drop by the convenience store.",
            japanese: "コンビニにちょっと立ち寄ろうよ",
            reading: "レッツ ドロップ バイ ザ コンビニエンス ストア",
          }
        ],
      },
      {
        usage: "友達の家に遊びに行くとき \"Drop by my place\"（うちにちょっと寄りなよ）",
        dialogue: [
          {
            english: "Nothing to do after school...",
            japanese: "放課後、暇だな〜",
            reading: "ナッシング トゥ ドゥ アフター スクール...",
          },
          {
            english: "Then drop by my place and let's play video games!",
            japanese: "じゃあうちにちょっと寄りなよ、ゲームしようぜ！",
            reading: "ゼン ドロップ バイ マイ プレイス アンド レッツ プレイ ビデオ ゲームズ！",
          }
        ],
      }
    ],
  },
  {
    id: 109,
    category: "daily-conversation",
    meaning: "（予定や約束が）決まっていない、未確定で保留である（★「放課後どうするかは、その場で！」の時）",
    word: "Up in the air",
    reading: "アップ イン ジ エアー",
    patterns: [
      {
        usage: "予定がまだ決まっていないとき \"Everything is up in the air.\"（まだ何も決まってないんだよね）",
        dialogue: [
          {
            english: "Where did we land on for the after-school hangout?",
            japanese: "放課後の集まり、場所どこになった？",
            reading: "ウェア ディド ウィー ランド オン フォー ザ アフター スクール ハングアウト？",
          },
          {
            english: "Actually, it's still up in the air.",
            japanese: "実は、まだどこにするか決まってなくて保留なんだよね",
            reading: "アクチュアリー, イッツ スティル アップ イン ザ エア",
          }
        ],
      },
      {
        usage: "計画が未確定なとき \"Plan is up in the air\"（計画が宙に浮いている）",
        dialogue: [
          {
            english: "Did you book the hotel for the weekend trip?",
            japanese: "週末の旅行、ホテル予約した？",
            reading: "ディド ユー ブック ザ ホテル フォー ザ ウィークエンド トリップ？",
          },
          {
            english: "No, our plan is still up in the air.",
            japanese: "ううん、計画がまだはっきり決まってなくて宙に浮いた状態なんだ",
            reading: "ノー, アワ プラン イズ スティル アップ イン ザ エア",
          }
        ],
      }
    ],
  },
  {
    id: 110,
    category: "daily-conversation",
    meaning: "（レストランなどの店が）とても居心地が良い、アットホームな",
    word: "Cozy",
    reading: "コージー",
    patterns: [
      {
        usage: "お気に入りのカフェを褒めるとき \"This cafe is so cozy.\"（このカフェ、すごく居心地がいいね）",
        dialogue: [
          {
            english: "This shop feels like a hidden gem.",
            japanese: "ここのお店、隠れ家みたいでいいね",
            reading: "ディス ショップ フィールズ ライク ア ヒドゥン ジェム",
          },
          {
            english: "Yeah, it's small but very cozy.",
            japanese: "ね、こぢんまりしてるけどすごく居心地がいいよね",
            reading: "イェア, イッツ スモール バット ヴェリー コージー",
          }
        ],
      },
      {
        usage: "家の中などが快適なとき \"Cozy room\"（居心地の良い部屋）",
        dialogue: [
          {
            english: "It's raining hard outside.",
            japanese: "外、雨がすごくなってきたね",
            reading: "イッツ レイニング ハード アウトサイド",
          },
          {
            english: "Let's just stay inside this cozy cafe and chill.",
            japanese: "この居心地のいいカフェの中にいて、まったり過ごそうよ",
            reading: "レッツ ジャスト ステイ インサイド ディス コージー カフェ アンド チル",
          }
        ],
      }
    ],
  }
];
