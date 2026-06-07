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
  },
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
        example: "「OpenAIのツール使ったことある？」「I have some familiarity with ChatGPT.（ChatGPTなら多少触ったことあるよ）」",
      },
      {
        usage: "全く未経験なとき \"I have no familiarity with...\"（〜は全く分かりません）",
        example: "「Cursorの使い心地どう？」「I have no familiarity with it yet.（まだ全く触ったことがなくて分からないんだよね）」",
      },
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
        example: "「何でそんなに新しいツールに詳しいの？」「I'm an AI enthusiast.（私、AIツールにめちゃくちゃハマってるんだよね）」",
      },
      {
        usage: "相手の熱量に驚いたとき \"You're a real enthusiast!\"（本当好きだね！/ガチ勢だね！）",
        example: "「毎日画像生成プロンプト研究してるんだ」「Wow, you're a real image-gen enthusiast!（わお、本物の画像生成ガチ勢だね！）」",
      },
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
        example: "「新しいプロンプトのコードあるよ」「Let me tinker with it.（ちょっと自分でもいじって試させて！）」",
      },
      {
        usage: "暇つぶしにいじっていたとき \"Just tinkering with...\"（〜をなんとなくいじってただけ）",
        example: "「何してるの？」「Just tinkering with my Cursor settings.（なんとなくCursorの設定をいじくり回してただけだよ）」",
      },
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
        example: "「この画像、めちゃくちゃ綺麗にできた！」「Looks amazing! Can you share your prompt?（すごい！なんて言って作ったかプロンプト教えてほしい！）」",
      },
      {
        usage: "指示文を考えているとき \"I'm working on a prompt.\"（プロンプトを作っているところ）",
        example: "「何集中してるの？」「I'm working on a prompt for my app.（アプリ用のプロンプトを練ってるところなんだ）」",
      },
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
        example: "「今日の夜、Discordの部屋開くね」「Cool. Ping me when you're ready.（了解、準備できたらメンション飛ばして呼んで！）」",
      },
      {
        usage: "気軽に連絡してねと言うとき \"Feel free to ping me.\"（気軽に声かけてね）",
        example: "「Cursorの使い方、分からなくなったらどうしよう」「Feel free to ping me anytime.（いつでも気軽にDiscordで呼んでね）」",
      },
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
        example: "「新しい課題、難しすぎない？」「From my perspective, it's actually fun.（私的には、むしろ結構楽しい気がするけどな）」",
      },
      {
        usage: "相手の考えを褒めるとき \"I like your perspective.\"（その考え方、めっちゃいいね！）",
        example: "「アプリのUI、もっとシンプルにした方が良くない？」「I like your perspective! Let's do that.（その視点めっちゃいいね！そうしよう！）」",
      },
      {
        usage: "人それぞれだよねと言うとき \"It depends on your perspective.\"（捉え方次第だよね）",
        example: "「あの先生の授業、厳しいよね」「Yeah, it depends on your perspective.（まあ、人それぞれの捉え方次第だよね）」",
      },
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
        example: "「授業終わったね！」「Do you want to hang out at the cafe?（このあとカフェでちょっと喋らない？）」",
      },
      {
        usage: "昨日何してたか言うとき \"I was hanging out with...\"（〜とダラダラ過ごしてた）",
        example: "「昨日何してたの？」「I was just hanging out with my friends.（友達と集まってなんとなくダラダラ過ごしてたよ）」",
      },
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
        example: "「あ、久しぶり！全然会えなかったね！」「I know! We should catch up over coffee!（本当だよね！近いうちカフェで近況報告し合おうよ！）」",
      },
      {
        usage: "最近どうだったか聞くとき \"Let's catch up.\"（色々話聞かせてよ）",
        example: "「最近忙しかったんだよね」「Oh really? Let's catch up later!（マジで？あとでゆっくり話聞かせてよ！）」",
      },
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
        example: "「今どこにいるの？」「Just chilling in the lounge.（ラウンジでまったり休憩してるところ）」",
      },
      {
        usage: "相手を落ち着かせたいとき \"Just chill.\"（まあ落ち着きなよ/リラックスしなよ）",
        example: "「テストの点数悪かったらどうしよう！」「Just chill, you studied a lot.（まあ落ち着きなって、あれだけ勉強したんだから）」",
      },
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
        example: "「お腹すいたね、何食べる？」「I'm craving something sweet, like a donut!（無性に甘いものが食べたい気分、ドーナツとか！）」",
      },
      {
        usage: "ジャンクフードを欲するとき \"I was craving...\"（無性に〜が食べたかったんだよね）",
        example: "「お昼にラーメン食べたんだ」「Nice. I was craving ramen yesterday too.（いいね。私も昨日無性にラーメン食べたかったんだよね）」",
      },
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
        example: "「コーヒー代いくらだった？」「Don't worry, my treat!（気にしないで、私のおごり！）」",
      },
      {
        usage: "相手をお誘いするとき \"I'll treat you to...\"（〜をごちそうするよ）",
        example: "「アプリ開発手伝ってくれてありがとう！」「I'll treat you to lunch!（手伝ってくれてありがとう！ランチおごらせて！）」",
      },
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
        example: "「今日トムは来ないの？」「Yeah, he flaked on me again.（うん、また彼にドタキャンされちゃった）」",
      },
      {
        usage: "ドタキャン癖がある人を指すとき \"He's a flake.\"（あいつドタキャンばっかりするんだよね）",
        example: "「あのグループワーク、彼連絡つかないよ」「Don't rely on him, he's a flake.（彼を当てにしちゃダメ、いつもドタキャンするから）」",
      },
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
        example: "「最近そのパン屋さんばかり行ってない？」「I'm obsessed with their butter rolls!（そこの塩バターロールにドハマりしてて頭から離れないの！）」",
      },
      {
        usage: "相手のハマり具合を突っ込むとき \"You're obsessed.\"（本当好きだねー！）",
        example: "「このAIアプリ、起きてから寝るまで使っちゃう」「Wow, you're obsessed!（わお、完全にドハマりしてるね！）」",
      },
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
        example: "「週末どこ行く？計画立てる？」「No plans, let's just be spontaneous!（計画なしで、その場の思いつきで行き当たりばったりで楽しもう！）」",
      },
      {
        usage: "自分の性格を言うとき \"I'm spontaneous.\"（私、思い立ったらすぐ動くタイプなんだ）",
        example: "「急にカフェ行こうって誘ってもいい？」「Sure! I'm pretty spontaneous.（もちろん！私フットワーク軽いからいつでも誘って！）」",
      },
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
        example: "「この授業の課題、多すぎるよね」「Definitely! I can't finish it.（本当それ！終わるわけないよね）」",
      },
      {
        usage: "予定を確約するとき \"I'll definitely be there.\"（絶対行くよ！）",
        example: "「今日の放課後の集まり、来れる？」「Yes, I'll definitely be there!（うん、絶対行くよ！）」",
      },
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
        example: "「あの子と友達になりたいな」「She looks really approachable, just say hi!（すごく話しかけやすそうな雰囲気だし、挨拶してみなよ！）」",
      },
      {
        usage: "先生の印象を言うとき \"The professor is approachable.\"（あの先生はフランクで質問しやすい）",
        example: "「オフィスアワー（質問時間）行くの緊張する」「Don't worry, he's very approachable.（大丈夫、あの先生めっちゃフランクで優しいから）」",
      },
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
        example: "「今日のプレゼンどうだった？」「It went well, but I'm exhausted.（上手くいったけど、もうクタクタで力尽きた…）」",
      },
      {
        usage: "徹夜明けなどのとき \"You look exhausted.\"（めちゃくちゃ疲れた顔してるよ）",
        example: "「昨日、課題で一晩中起きてたんだ」「Oh no, you look exhausted!（うわあ、めちゃくちゃ疲れた顔してるよ！早く寝て！）」",
      },
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
        example: "「レポートもう終わった？」「No, I always procrastinate until the last minute.（ううん、いつも最後の最後まで後回しにしちゃうんだよね）」",
      },
      {
        usage: "やめなきゃと思っているとき \"Stop procrastinating.\"（後回しにするのやめなきゃ）",
        example: "「YouTube見ちゃう…」「Stop procrastinating and let's study!（後回しにするのやめて、さあ勉強しよ！）」",
      },
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
        example: "「明日、コミュニティの授業のテストだよ」「Oh no, I need to cram for it tonight!（やばい、今夜徹夜で頭に詰め込まなきゃ！）」",
      },
      {
        usage: "一夜漬けはダメだよと言うとき \"Don't cram.\"（詰め込みは良くないよ）",
        example: "「毎回テスト前日しか勉強しないんだ」「You shouldn't cram every time!（毎回一夜漬けにするのは良くないって！）」",
      },
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
        example: "「あれ！こんなところで何してるの？」「Oh, hi! What a coincidence!（あれ、おーい！すごい偶然だね！）」",
      },
      {
        usage: "予定や好みが同じだったとき \"It's a coincidence.\"（偶然だね）",
        example: "「私もそのAIツール、昨日ダウンロードしたところ！」「Really? That's a crazy coincidence!（本当に？ものすごい偶然だね！）」",
      },
    ],
  },

  // 21–26 AIコミュニティ・会話の広がり
  {
    id: 21,
    category: "ai-community",
    meaning: "画像生成（AIの画像制作機能の略称）",
    word: "Image-gen",
    reading: "イメージジェン",
    patterns: [
      {
        usage: "画像生成を試しているとき \"I'm trying out image-gen.\"（画像生成を試してるところ）",
        example: "「その綺麗な画像どうしたの？」「I'm trying out this new image-gen tool.（この新しい画像生成ツールを試して作ってみたんだ）」",
      },
      {
        usage: "画像生成のコツを聞くとき \"Any tips for image-gen?\"（画像生成のコツとかある？）",
        example: "「もっとリアルな画像にしたいな」「Any tips for image-gen prompts?（画像生成のプロンプトで何かコツってある？）」",
      },
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
        example: "「ボタン押しても動かないんだけど」「Maybe there's a glitch in the app.（アプリのバグか何かかもね）」",
      },
      {
        usage: "一時的なものだと言うとき \"It's just a temporary glitch.\"（ただの一時的なエラーだよ）",
        example: "「データ消えちゃったかな？」「Don't worry, it's just a temporary glitch.（大丈夫、ただの一時的なシステムエラーだよ）」",
      },
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
        example: "「プロンプト変えたらどうなった？」「The output is much better now!（出力結果がさっきよりずっと良くなったよ！）」",
      },
      {
        usage: "結果を確認してほしいとき \"Check the output.\"（出力を見てみて）",
        example: "「Cursorがコード書いてくれたよ」「Let me check the output.（どれどれ、出力されたコードを見てみせて）」",
      },
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
        example: "「あの新しいAI機能、もう使えるの？」「Not yet, I'm waiting for the public release.（まだ使えないよ、一般公開されるのを待ってるところ）」",
      },
      {
        usage: "ついに公開されたとき \"It's finally out for public release!\"（ついに一般公開されたよ！）",
        example: "「例の新機能、使えるようになったね」「Yeah, it's finally out for public release!（うん、ついに一般公開で誰でも使えるようになったね！）」",
      },
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
        example: "「まだコード直してるの？」「Yeah, just tweaking the UI a little bit.（うん、ちょっと見た目のデザインを微調整してるところ）」",
      },
      {
        usage: "調整が必要だと言うとき \"It needs some tweaking.\"（少し微調整が必要だね）",
        example: "「これでアプリ動くかな？」「It's good, but it needs some tweaking.（いい感じだけど、まだ少し微調整が必要そうだね）」",
      },
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
        example: "「このAIの回答スピード、ヤバくない？」「Yeah, they use a state-of-the-art model.（本当それ、最先端のモデルを使ってるからね）」",
      },
      {
        usage: "最新のテクノロジーについて話すとき \"State-of-the-art technology\"（最先端のテクノロジー）",
        example: "「将来どんなアプリ作ってみたい？」「I want to build something using state-of-the-art tech!（最先端の技術を使った何かを作ってみたいな！）」",
      },
    ],
  },

  // 27–40 授業・ディスカッション
  {
    id: 27,
    category: "class-discussion",
    meaning: "意見、評価、アドバイス（★日常でも「感想教えて！」で超使う）",
    word: "Feedback",
    reading: "フィードバック",
    patterns: [
      {
        usage: "意見を聞きたいとき \"Give me some feedback.\"（感想やアドバイスをちょうだい）",
        example: "「このパンフレットのデザインどうかな？」「Looks nice! Let me give you some feedback.（いいね！ちょっと感想伝えてもいい？）」",
      },
      {
        usage: "アドバイスをくれて感謝するとき \"Thanks for the feedback.\"（意見をありがとう！）",
        example: "「ここを直すともっと良くなるよ」「Thanks for the feedback, that helps!（アドバイスありがとう、助かる！）」",
      },
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
        example: "「もっと簡単なアプリにしようよ」「Can you give me a concrete example?（例えばどんな感じか、具体的な例を出して教えてくれる？）」",
      },
      {
        usage: "計画がはっきりしているとき \"Concrete plan\"（具体的な計画）",
        example: "「週末何するか決まった？」「No concrete plan yet, we'll see!（まだ具体的な計画はないよ、その場で決めよう！）」",
      },
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
        example: "「なんで今の話したの？」「Because it's relevant to our assignment.（だって今の、私たちの宿題にめちゃくちゃ関係がある話だからだよ）」",
      },
      {
        usage: "関係ない話を遮るとき \"That's not relevant.\"（それ今の話に関係なくない？）",
        example: "「あ、そういえば今日の晩ご飯何にする？」「Hey, that's not relevant right now!（ちょっと、それ今のディスカッションに関係ないじゃん！笑）」",
      },
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
        example: "「明日の集合場所なんだけど、やっぱりあそこで…」「Wait, can you clarify that? Where exactly?（待って、ちょっとはっきりさせてくれる？結局どこに集合？）」",
      },
      {
        usage: "自分の言葉を言い直すとき \"Let me clarify.\"（誤解のないように言うとね、説明し直すとね）",
        example: "「怒ってるの？」「No! Let me clarify. I'm just tired.（違う違う！言い直させて、怒ってなくてただ眠いだけ！）」",
      },
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
        example: "「このアプリは高齢者の方が使いやすいと思うんだ」「Wow, great insight!（わお、素晴らしい視点だね！）」",
      },
      {
        usage: "新しい気づきを得たとき \"Give me some insight.\"（アドバイスやヒントをちょうだい）",
        example: "「プロンプトがうまく作れないんだ」「Let me give you some insight into that.（それについてちょっとヒントをあげるよ）」",
      },
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
        example: "「次のテストっていつだっけ？」「Just check the syllabus, it's on there.（シラバスチェックしてみて、そこに書いてあるよ）」",
      },
      {
        usage: "最初の授業のとき \"Syllabus day\"（シラバスを読むだけの初日の授業）",
        example: "「今日の授業、もう終わったの？」「Yeah, it was just a syllabus day.（うん、今日はシラバス読むだけの日だったからすぐ終わったよ）」",
      },
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
        example: "「今日の授業の宿題って何だっけ？」「Do we have an assignment? I forgot.（宿題出てたっけ？忘れちゃった）」",
      },
      {
        usage: "課題が終わらないとき \"Working on an assignment.\"（課題をやってる最中）",
        example: "「今夜遊べる？」「Sorry, I'm working on a huge assignment.（ごめん、デカい課題をやってる最中で無理そうだわ）」",
      },
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
        example: "「英語のエッセイ書かなきゃ」「When is it due?（締め切りいつまでなの？）」",
      },
      {
        usage: "今日が締め切りのとき \"It's due today.\"（今日が提出期限だよ）",
        example: "「あのレポート忘れてた！」「Hurry up, it's due today by midnight!（急いで！今日の夜中までが期限だよ！）」",
      },
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
        example: "「学校遠いの？」「Yeah, my commute is about an hour.（うん、通学に1時間くらいかかるんだよね）」",
      },
      {
        usage: "通学がしんどいとき \"Long commute\"（通学が長い・大変）",
        example: "「毎日1限の授業辛いよね」「I hate this long commute.（この長い通学時間が本当に嫌になっちゃう）」",
      },
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
        example: "「オンライン授業どう？」「I like it, but I need more interaction with classmates.（いいんだけど、もっとクラスメイトとの交流が欲しいな）」",
      },
      {
        usage: "楽しい交流だったとき \"Good interaction\"（良い交流、楽しいやり取り）",
        example: "「今日のグループワーク楽しかったね」「Yeah, it was a really good interaction.（うん、本当に良い交流ができたよね）」",
      },
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
        example: "「このアプリ、みんなで作ったの？」「Yes, it was a collaborative project.（うん、みんなで協力して作ったプロジェクトなんだ）」",
      },
      {
        usage: "みんなでやろうよと言うとき \"Let's be collaborative.\"（みんなで協力し合おう）",
        example: "「課題、一人でやるのきついな」「Let's be collaborative and work together!（みんなで協力して一緒にやろうよ！）」",
      },
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
        example: "「新しいデザイン作ってみたんだ」「Let me critique your work!（どれどれ、アドバイスさせて！）」",
      },
      {
        usage: "授業での講評会のとき \"Critique session\"（講評会、アドバイスし合う時間）",
        example: "「次の授業は何するの？」「We have a critique session for our photos.（写真課題の講評会があるんだよね）」",
      },
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
        example: "「アプリのネタが思いつかないよ」「Let's brainstorm together at the cafe!（カフェで一緒にアイデア出し合おうよ！）」",
      },
      {
        usage: "良い案を考えているとき \"Brainstorming some ideas.\"（アイデアを練ってるところ）",
        example: "「何メモしてるの？」「Just brainstorming some ideas for my YouTube shorts.（YouTubeショートのネタをブレストしてるところだよ）」",
      },
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
        example: "「彼はさっきと違うこと言ってるよ」「Yeah, it contradicts what he said earlier.（本当だね、さっき彼が言ってたことと矛盾してるよね）」",
      },
      {
        usage: "反論するつもりはないけど、と言うとき \"I don't mean to contradict you...\"（反論するわけじゃないんだけどね…）",
        example: "「このやり方が一番だよ」「I don't mean to contradict you, but there's an easier way.（反論するわけじゃないんだけど、もっと簡単な方法もあるよ）」",
      },
    ],
  },

  // 41–50 放課後・カフェでの雑談
  {
    id: 41,
    category: "daily-conversation",
    meaning: "おすすめ、一押し",
    word: "Recommendation",
    reading: "レコメンデーション",
    patterns: [
      {
        usage: "おすすめを聞くとき \"Any recommendations?\"（おすすめ何かある？）",
        example: "「このカフェ初めて来たんだ」「Any recommendations for lunch?（ランチのおすすめ何かある？）」",
      },
      {
        usage: "自分のおすすめを教えるとき \"My recommendation is...\"（私のおすすめは〜だよ）",
        example: "「どのAIツールがおすすめ？」「My recommendation is Cursor, definitely!（私のおすすめは間違いなくCursorだよ！）」",
      },
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
        example: "「このカフェ、居心地がいいね」「Yeah, I love the atmosphere here.（ね、ここの雰囲気めっちゃ好きだわ）」",
      },
      {
        usage: "緊張感があるとき \"Tense atmosphere\"（ピリピリした雰囲気）",
        example: "「テスト中の教室、怖かったね」「It was a very tense atmosphere.（すごいピリピリした雰囲気だったよね）」",
      },
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
        example: "「課題が山ほどあって100時間くらいかかりそう」「You're exaggerating! It's not that bad.（大げさに言いすぎ！そこまでじゃないって！笑）」",
      },
      {
        usage: "本当だよと強調するとき \"I'm not exaggerating.\"（盛ってないよ、ガチだよ）",
        example: "「あのパン、美味しすぎて飛ぶよ」「I'm not exaggerating, it's the best bread ever!（盛ってないって、マジで今までで一番美味しいパンだから！）」",
      },
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
        example: "「このAIツール、1秒で動画が作れるらしいよ」「Hmm, I'm a little skeptical about that.（うーん、それちょっと本当か怪しい気がするな〜）」",
      },
      {
        usage: "最初は疑ってたけど、と言うとき \"I was skeptical at first.\"（最初は半信半疑だったんだ）",
        example: "「このアプリ、使ってみたら最高だった！」「Right? I was skeptical at first too.（でしょ？私も最初は半信半疑だったんだよね）」",
      },
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
        example: "「この2つのデザイン、どこが違うの？」「There is a subtle difference in color.（色に絶妙な違いがあるんだよね）」",
      },
      {
        usage: "ほんのり風味を感じるとき \"Subtle taste\"（隠し味、ほんのりした味）",
        example: "「このパン、すごく美味しい！」「It has a subtle butter flavor.（ほんのりバターの風味がして美味しいよね）」",
      },
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
        example: "「隣の席の人と話した？」「Yeah, he is so friendly and nice!（うん、めっちゃフレンドリーで良い人だったよ！）」",
      },
      {
        usage: "フレンドリーに行こうと言うとき \"Let's be friendly.\"（親しみやすく接しよう）",
        example: "「新入生が入ってきたね」「Let's be friendly and welcome them!（親しみやすく話しかけて歓迎してあげようよ！）」",
      },
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
        example: "「テラス席と店内、どっちがいい？」「My preference is the patio, it's nice outside.（私の好みとしてはテラス席かな、外が気持ちいいし）」",
      },
      {
        usage: "どっちでもいいよと言うとき \"No strong preference.\"（強いこだわり（好み）はないよ＝どっちでもいいよ）",
        example: "「コーヒーと紅茶、どっちにする？」「I have no strong preference, either is fine!（特にこだわりはないから、どっちでもいいよ！）」",
      },
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
        example: "「週末、高級レストランに行くんだ」「Wow, I'm so envious! Have fun!（わお、めっちゃうらやましい！楽しんできてね！）」",
      },
      {
        usage: "うらやましがらせないでよ、のとき \"Don't make me envious.\"（うらやましくなっちゃうじゃん！笑）",
        example: "「ほら、ハワイのビーチの写真！」「Stop it, don't make me envious!（やめてよ、うらやましくなっちゃうじゃん！笑）」",
      },
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
        example: "「元カレとすれ違って挨拶しちゃった」「Oh no, that was awkward.（うわあ、それは気まずかったね…）」",
      },
      {
        usage: "自分がぎこちないとき \"I feel awkward.\"（なんかそわそわする、気まずい）",
        example: "「みんな英語ペラペラで緊張する」「I feel awkward too, but it's okay!（私もなんかそわそわしちゃうけど、大丈夫だよ！）」",
      },
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
        example: "「宿題のコード、一緒に見てあげるよ」「Wow, thank you! I really appreciate it!（わあ、ありがとう！本当に感謝するよ！）」",
      },
      {
        usage: "相手の優しさに感謝するとき \"I appreciate your help.\"（助けてくれてありがとう）",
        example: "「いつでも相談に乗るからね」「I appreciate your help, you're the best!（助けてくれて本当にありがとう、あなた最高！）」",
      },
    ],
  },

  // 51–70 AI関連・開発・コミュニティ
  {
    id: 51,
    category: "ai-community",
    meaning: "仕様、設計書（★Cursorに「この仕様で作って」と言う時に最頻出）",
    word: "Specification / Spec",
    reading: "スペシフィケーション / スペック",
    patterns: [
      {
        usage: "仕様を確認するとき \"Check the specs.\"（仕様書・機能要件を確認して）",
        example: "「このボタンを押したとき、どう動けばいい？」「Check the specs I pasted.（貼り付けた仕様書を確認してみて）」",
      },
      {
        usage: "仕様が変わったとき \"The specs changed.\"（仕様が変わったんだよね）",
        example: "「コード書き直してるの？」「Yeah, the specs changed suddenly.（うん、急に仕様が変わっちゃってさ）」",
      },
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
        example: "「CursorとGitHubの連携どう？」「It's so seamless and comfortable!（めちゃくちゃシームレスで超快適だよ！）」",
      },
      {
        usage: "スムーズに動くとき \"It works seamlessly.\"（途切れなくスムーズに動くね）",
        example: "「このアプリ、データの読み込み早いね」「Yeah, it works seamlessly.（ね、一切引っかかりなくシームレスに動くよね）」",
      },
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
        example: "「新しい単語帳アプリの見た目どうかな？」「I love it! The UI is very intuitive.（最高！すごく直感的で分かりやすいUIだね）」",
      },
      {
        usage: "説明なしで使えるとき \"Intuitive design\"（直感的なデザイン）",
        example: "「使い方のマニュアル作った方がいい？」「No need, it has an intuitive design.（いらないよ、直感的に触れるデザインだから大丈夫）」",
      },
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
        example: "「このAI機能、Macでも動くかな？」「Yes, it's compatible with Mac.（うん、Macにもちゃんと対応してるよ）」",
      },
      {
        usage: "動かないとき \"Not compatible\"（互換性がない、対応していない）",
        example: "「エラーが出ちゃった」「Ah, that library is not compatible with this version.（あー、そのライブラリはこのバージョンに対応してないんだわ）」",
      },
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
        example: "「このAI、長文の翻訳も完璧にできる？」「It's good, but it still has some limitations.（優秀だけど、まだいくつか限界はあるよ）」",
      },
      {
        usage: "今の技術の限界を言うとき \"Tech limitation\"（技術的な限界）",
        example: "「画像の一部がたまにバグるんだよね」「That's just a tech limitation for now.（それは現時点での技術的な限界だね）」",
      },
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
        example: "「AIの返答がなんかズレるんだよね」「You should optimize your prompt.（プロンプトをもっと最適化した方がいいね）」",
      },
      {
        usage: "コードを軽くしたいとき \"Optimize the code\"（コードを効率化する）",
        example: "「アプリの動きが少し重いかも」「Let's optimize the code tonight.（今夜コードを最適化して軽くしよう）」",
      },
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
        example: "「Cursorの見た目、かっこいいね」「Thanks, you can customize the theme easily.（ありがと、テーマは簡単にカスタムできるよ）」",
      },
      {
        usage: "特注のプロンプトのとき \"Customized prompt\"（自分専用に作ったプロンプト）",
        example: "「毎回同じ指示書くの面倒だな」「Use a customized system prompt.（自分専用にカスタムしたシステムプロンプトを使うといいよ）」",
      },
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
        example: "「毎日手動でデータコピーするのしんどい」「Let's automate the process using AI.（AIを使ってその作業自動化しちゃおうよ）」",
      },
      {
        usage: "自動化されて便利になったとき \"It's automated.\"（自動化されてるよ）",
        example: "「通知はどうやって送ってるの？」「It's completely automated now.（今はもう完全に自動化されてるよ）」",
      },
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
        example: "「ブログのアイコンどうしよう」「Just ask the AI to generate one.（AIにアイコンを生成してもらいなよ）」",
      },
      {
        usage: "コードを作ってもらうとき \"Generate the code\"（コードを生成する）",
        example: "「Cursorに何て頼んだの？」「I asked it to generate the quiz function.（クイズ機能を生成してって頼んだんだ）」",
      },
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
        example: "「単語帳アプリ、ほぼ完成したよ！」「Awesome! Let's deploy it now!（最高じゃん！今すぐネットに公開しよう！）」",
      },
      {
        usage: "公開作業中のとき \"Deploying...\"（デプロイ中、公開処理中）",
        example: "「画面が固まってる？」「No, it's just deploying the code.（違うよ、今コードをデプロイ公開してるところなんだ）」",
      },
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
        example: "「単語帳に音声つけたいんだよね」「We can integrate the Web Speech API.（Web Speech APIを組み込めばできるよ）」",
      },
      {
        usage: "連携させたいとき \"Integrate with...\"（〜と連携・合体させる）",
        example: "「Notionにデータを送りたい」「Let's integrate the app with Notion.（アプリをNotionと連携させよう）」",
      },
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
        example: "「たまに音声が流れないエラーがある」「Can you replicate the bug right now?（今そのバグ再現できる？）」",
      },
      {
        usage: "他人のすごいプロンプトを真似るとき \"Replicate the output\"（結果を再現する）",
        example: "「このAIアートすごいね」「I'll try to replicate the output.（私も同じような出力結果を再現してみるよ）」",
      },
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
        example: "「このAIの回答、めちゃくちゃ賢い！」「You must have used a sophisticated prompt.（よっぽど洗練されたプロンプトを使ったんだね）」",
      },
      {
        usage: "アプリの作りがすごいとき \"It looks sophisticated.\"（高度で完成度が高そうに見える）",
        example: "「Cursorが書いたコードの構造、綺麗だよ」「Wow, it looks sophisticated.（わお、高度で洗練されてるね）」",
      },
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
        example: "「最近みんなCursor使い始めたね」「Yeah, AI is revolutionizing the way we code!（うん、AIが私たちのコーディング方法を劇的に変えてるよね！）」",
      },
      {
        usage: "ライフスタイルを変えるとき \"Revolutionize the industry\"（業界を激変させる）",
        example: "「この新しいAIツール凄すぎる」「It's going to revolutionize the whole industry.（業界全体を劇的に変えちゃうレベルだね）」",
      },
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
        example: "「このアプリ、たくさんの人が使っても大丈夫？」「We need to consider scalability for the database.（データベースの拡張性を考えなきゃね）」",
      },
      {
        usage: "問題ないと言うとき \"Good scalability\"（拡張性が高い）",
        example: "「このシステム構造はどう？」「It has good scalability.（これなら拡張性も高くてバッチリだよ）」",
      },
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
        example: "「AIを使う最大のメリットって何？」「It drastically improves your work efficiency.（作業効率が爆発的に上がることだね）」",
      },
      {
        usage: "コードの無駄がないとき \"Code efficiency\"（コードの効率の良さ）",
        example: "「Cursorが書いたコード、短くて綺麗」「Yeah, it's very clear on efficiency.（うん、効率の良さを重視してくれてるね）」",
      },
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
        example: "「アプリが急に止まった！」「The system will detect the error and log it.（システムがエラーを検知してログに残してくれてるはずだよ）」",
      },
      {
        usage: "AIが画像から何かを見つけるとき \"Detect faces/objects\"（顔や物体を検知する）",
        example: "「このAI、写真に何が写ってるか分かるの？」「Yeah, it can detect objects instantly.（うん、一瞬で物体を検知できるよ）」",
      },
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
        example: "「このAIの翻訳って信じて大丈夫？」「The accuracy is high, but always double-check.（精度は高いけど、一応いつも確認してね）」",
      },
      {
        usage: "精度を上げたいとき \"Improve the accuracy\"（正確さを高める）",
        example: "「もっと正しいデータを返してほしい」「We need to improve the accuracy of the prompt.（プロンプトの精度を上げる必要があるね）」",
      },
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
        example: "「ボタン連打されたらアプリどうなるかな？」「Let's simulate that behavior and test it.（その動きをシミュレートしてテストしてみよう）」",
      },
      {
        usage: "本番の環境を試すとき \"Simulate the environment\"（環境を再現する）",
        example: "「スマホの実機が手元にない」「We can simulate the phone screen in Cursor.（Cursor（ブラウザ）上でスマホ画面をシミュレートできるよ）」",
      },
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
        example: "「スマホで追加した単語がパソコンにない」「You need to sync the data with the cloud.（データをクラウドと同期させる必要があるよ）」",
      },
      {
        usage: "同期が完了したとき \"In sync\"（同期できている、一致している）",
        example: "「データ更新された？」「Yes, everything is in sync now.（うん、今は全部同期されて最新状態だよ）」",
      },
    ],
  },

  // 71–90 コミュカレ授業内のフランクな会話
  {
    id: 71,
    category: "class-discussion",
    meaning: "パートナー、ペアを組む相手（★授業で「2人組になって」と言われた時の相棒）",
    word: "Partner",
    reading: "パートナー",
    patterns: [
      {
        usage: "ペアを組もうと誘うとき \"Want to be partners?\"（ペア組まない？）",
        example: "「次のワーク、2人組だって」「Want to be partners? Let's work together!（ペア組まない？一緒にやろうよ！）」",
      },
      {
        usage: "すでに相手が決まっているか聞くとき \"Do you have a partner?\"（ペアもう決まった？）",
        example: "「あ、まだ1人かな？」「Do you have a partner yet? If not, let's team up!（ペアもう決まった？まだなら一緒にやろ！）」",
      },
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
        example: "「先週学校休んでたよね、大丈夫？」「I really need to catch up on the lectures!（講義の遅れをマジで取り戻さなきゃいけないんだ！）」",
      },
      {
        usage: "溜まった課題をやるとき \"Catch up on my assignments\"（課題を一気に片付ける）",
        example: "「週末の予定は？」「Just catching up on my late assignments.（溜まっちゃった課題を一気に片付ける予定…）」",
      },
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
        example: "「次の授業、出席きびしい？」「I'm thinking of skipping the next class. I'm too tired.（次の授業サボろうか迷い中…眠すぎる）」",
      },
      {
        usage: "サボっちゃダメだよと引き止めるとき \"Don't skip.\"（サボりなさんな）",
        example: "「今日サボっちゃおうかな」「Don't skip! We have a quiz today.（サボっちゃダメだって！今日小テストあるよ）」",
      },
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
        example: "「先生の説明、分かった？」「Yes! It finally clicked after you explained it.（うん！君が説明してくれてやっとピンときたわ！）」",
      },
      {
        usage: "いまいち腑に落ちないとき \"It doesn't click.\"（なんかピンとこない）",
        example: "「この数式、どう思う？」「Hmm, it just doesn't click for me yet.（うーん、まだなんか自分の中でピンとこないんだよね）」",
      },
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
        example: "「このアプリの設定、難しいね」「I'm trying to figure out how to use it.（今がんばって使い方を理解しようとしてるんだ）」",
      },
      {
        usage: "分かった！と言いたいとき \"I figured it out!\"（やり方が分かったぞ！）",
        example: "「エラー直った？」「Yes, I figured it out with Cursor!（うん、Cursorを使ってなんとか解決したよ！）」",
      },
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
        example: "「課題進んでる？」「No, I keep getting distracted by Instagram!（ううん、インスタのせいでずっと気が散っちゃってダメだ！）」",
      },
      {
        usage: "集中しなきゃと言うとき \"Stop getting distracted.\"（集中しなよ！）",
        example: "「あ、あの動画見た？」「Hey, stop getting distracted and let's focus!（ちょっと、上の空になってないで集中しよ！）」",
      },
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
        example: "「今学期、5つの授業取ってるんだ」「Wow, I would be overwhelmed by that!（わお、私ならそれキャパオーバーで死んじゃう！）」",
      },
      {
        usage: "大丈夫だよと励ますとき \"Don't feel overwhelmed.\"（焦らないで、落ち着いて）",
        example: "「課題が多すぎて何からやればいいか…」「Take it easy, don't feel overwhelmed.（気楽にいこう、焦らなくて大丈夫だよ）」",
      },
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
        example: "「最近の授業、スピード早くない？」「Yeah, I'm falling behind in this class.（うん、この授業ちょっとついていけなくなってきた…）」",
      },
      {
        usage: "遅れないようにしようと言うとき \"Don't fall behind.\"（遅れずについていこう）",
        example: "「今週はちょっとのんびりしようかな」「Make sure you don't fall behind on the reading.（リーディングの課題、遅れないように気をつけなよ）」",
      },
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
        example: "「Cursorのショートカット覚えた？」「Yeah, I'm finally getting the hang of it!（うん、やっとコツを掴んできた感じ！）」",
      },
      {
        usage: "まだ慣れないとき \"I can't get the hang of...\"（なかなか慣れない）",
        example: "「新しいMacの操作どう？」「I still can't get the hang of the trackpad.（トラックパッドの操作にまだ全然慣れないんだよね）」",
      },
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
        example: "「今夜も徹夜でプログラミングする！」「Hey, you should take it easy or you'll get sick.（おいおい、無理しすぎないで少し休みなよ）」",
      },
      {
        usage: "別れ際の挨拶として \"Take it easy!\"（じゃあね！/またね！）",
        example: "「じゃあ私、次の教室行くね」「Okay, take it easy!（了解、またね〜！）」",
      },
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
        example: "「隣の席の子と何話してたの？」「We really hit it off talking about AI!（AIの話でめちゃくちゃ意気投合しちゃってさ！）」",
      },
      {
        usage: "彼ら仲良いねと言うとき \"They hit it off.\"（あの2人、すっかり仲良しだね）",
        example: "「トムとケン、ずっと喋ってるね」「Yeah, they hit it off instantly.（ね、会ってすぐに意気投合したみたい）」",
      },
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
        example: "「授業終わったらどうする？」「Let's head over to the library to study.（図書室に移動して勉強しようよ！）」",
      },
      {
        usage: "今から行くよというとき \"I'm heading over to...\"（今から〜に向かうところ）",
        example: "「今どこ？」「I'm heading over to your classroom right now.（今そっちの教室に向かってるところだよ）」",
      },
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
        example: "「アプリのテーマは決まったけど…」「Let's flesh out the details together.（ここから一緒に詳細を具体的に詰めていこう！）」",
      },
      {
        usage: "もっと中身を濃くしたいとき \"Needs to be fleshed out\"（もっと練り直す必要がある）",
        example: "「この企画書で先生に出していいかな？」「It's a bit short, it needs to be fleshed out.（ちょっと薄いから、もっと中身を練った方がいいかも）」",
      },
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
        example: "「みんなで新しいAIツールの話をしてるんだ」「Sounds fun! Can I join in?（楽しそう！私も混ぜてもらっていい？）」",
      },
      {
        usage: "おいでよと誘うとき \"Feel free to join in.\"（遠慮なく混ざりなよ）",
        example: "「あ、お邪魔じゃなければ…」「Don't be shy, feel free to join in!（恥ずかしがらないで、ほら混ざりなよ！）」",
      },
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
        example: "「君もガジェット好きで、しかもパン作りが趣味なの？」「Wow, we have a lot in common!（うわあ、うちら共通点多すぎでしょ！）」",
      },
      {
        usage: "共通点が何もないとき \"Nothing in common\"（これっぽっちも共通点がない）",
        example: "「あのペアの人と会話が続かないんだ」「Do you guys have nothing in common?（共通の話題がマジで何もない感じ？）」",
      },
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
        example: "「この英語の発表、うまくできるか緊張する」「Don't worry, you can count on me for help!（大丈夫、私がサポートするから任せといて！）」",
      },
      {
        usage: "相手を信頼して頼るとき \"I'm counting on you.\"（頼りにしてるよ）",
        example: "「Cursorのコードエラー直してくれる？」「Sure.」「I'm counting on you!（頼りにしてるよ、頼むね！）」",
      },
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
        example: "「グループワークの進み具合はどう？」「Any progress on your slide?（スライドの作成、進んでる？）」",
      },
      {
        usage: "順調だと言うとき \"Making good progress\"（いい感じに進んでる）",
        example: "「アプリ開発はどう？」「We are making good progress thanks to Cursor!（Cursorのおかげでめちゃくちゃ順調に進んでるよ！）」",
      },
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
        example: "「明日のテスト、全く勉強してなくて死にそう」「Don't worry, we're in the same boat!（安心しな、私も全くやってないから同じ状況だよ！笑）」",
      },
      {
        usage: "みんな一緒だよと言うとき \"Everyone is in the same boat.\"（みんな大変なのは一緒だよ）",
        example: "「課題が多くて辛いな」「Everyone in class is in the same boat.（クラスのみんな同じ状況だから、一緒に頑張ろう）」",
      },
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
        example: "「もうすぐチャイムが鳴るね」「Okay, let's wrap up our discussion for today.（よし、今日のディスカッションはこの辺で終わりにしよう）」",
      },
      {
        usage: "最後のまとめをするとき \"Just wrapping up\"（ちょうどまとめをしてる段階）",
        example: "「まだ作業終わらない？」「We're just wrapping up the final slide.（今ちょうど最後のスライドをまとめて仕上げてるところだよ）」",
      },
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
        example: "「次のプロジェクトのネタが思いつかないな」「Let's bounce ideas off each other over lunch!（ランチ食べながらお互いアイデアを出し合って相談しようよ！）」",
      },
      {
        usage: "壁打ち相手になってほしいとき \"Bounce an idea off you\"（ちょっと意見を聞かせてほしい）",
        example: "「ちょっといい？」「Can I bounce a quick idea off you?（ちょっと新しいアイデア思いついたから、意見聞かせてもらってもいい？）」",
      },
    ],
  },

  // 91–110 放課後のカフェやお店での会話
  {
    id: 91,
    category: "daily-conversation",
    meaning: "割り勘にする、支払いを分ける（★カフェやレストランでの会計時に最頻出）",
    word: "Split the bill / Split it",
    reading: "スプリット ザ ビル / スプリット イット",
    patterns: [
      {
        usage: "割り勘にしようと提案するとき \"Let's split the bill.\"（割り勘にしよう！）",
        example: "「会計まとめて来ちゃったね」「Don't worry, let's split the bill!（気にしないで、割り勘にしよう！）」",
      },
      {
        usage: "きれいに半分に分けるとき \"Split it half and half\"（きれいに半分ずつにしよう）",
        example: "「2人で20ドルだね」「Let's just split it half and half.（1人10ドルずつ、きれいに半分に分けよう）」",
      },
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
        example: "「その塩バターロールどう？」「Oh my god, this is so tasty! You should try it.（うわ、これめっちゃ美味しい！君も食べてみなよ！）」",
      },
      {
        usage: "美味しいお店を紹介するとき \"Tasty food\"（美味しいご飯）",
        example: "「駅の近くに新しいお店できたの知ってる？」「Yeah, they have really tasty food!（知ってる、あそこ本当に美味しいご飯出すよね！）」",
      },
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
        example: "「ここのスープ、具だくさんで美味しいね」「Yeah, it's a very hearty soup, perfect for winter!（ね、具だくさんで大満足のスープだよね、冬にぴったり！）」",
      },
      {
        usage: "ガッツリ食べたいとき \"Something hearty\"（しっかりしたものが食べたい）",
        example: "「お腹ペコペコだわ」「Let's get something hearty like yakiniku!（焼肉みたいにガッツリ食べ応えあるものにしよう！）」",
      },
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
        example: "「このチョコレートケーキ、どう？」「Wow, it's so rich and delicious!（わお、すごく濃厚で美味しい！）」",
      },
      {
        usage: "スープやソースが濃厚なとき \"Rich flavor\"（濃厚な味わい）",
        example: "「このラーメンのスープ、すごいね」「Yeah, it has a very rich flavor.（ね、すごくコクがあって濃厚な味わいだよね）」",
      },
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
        example: "「あそこに可愛い雑貨屋さんがある！」「Let's pop into the shop for a minute.（ちょっとあのお店に入ってみようよ！）」",
      },
      {
        usage: "帰り道に寄る予定のとき \"Pop into the cafe\"（カフェにサッと寄る）",
        example: "「このあと真っ直ぐ帰る？」「No, I'm gonna pop into the cafe first.（ううん、先にカフェにちょっと寄ってから帰るよ）」",
      },
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
        example: "「店内でお召し上がりですか？」「To go, please!（お持ち帰りでお願いします！）」",
      },
      {
        usage: "持ち帰りにするか聞くとき \"Get it to go\"（テイクアウトにする）",
        example: "「カフェ混んでて席がないね」「Let's just get our coffee to go.（カフェ混んでて座れないし、コーヒー持って帰ろっか）」",
      },
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
        example: "「放課後4時にカフェでどう？」「That suits me perfectly! See you then.（その時間めちゃくちゃ都合いい！じゃあまたあとでね）」",
      },
      {
        usage: "相手に似合っているとき \"It suits you.\"（それ似合ってるよ！）",
        example: "「新しいワンピース買ったんだ」「Wow, that color really suits you!（わお、その色本当に君に似合ってるよ！）」",
      },
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
        example: "「放課後どこ行く？」「I just came up with a great cafe!（いいカフェ思いついちゃった！）」",
      },
      {
        usage: "解決策を出さなきゃいけないとき \"Come up with a plan\"（計画を思いつく）",
        example: "「週末の予定、どうする？」「Let's come up with a fun plan tonight.（今夜みんなで楽しい計画を考えようよ）」",
      },
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
        example: "「あのタピオカ屋さん、すごい人だね」「Let's get in line before it gets longer!（これ以上長くなる前に列に並ぼう！）」",
      },
      {
        usage: "並んで待っているとき \"In line\"（列に並んでいる最中）",
        example: "「今どこにいるの？」「I'm waiting in line for the coffee.（今コーヒー買うのに列に並んで待ってるところ）」",
      },
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
        example: "「今日のご飯、何にする？」「I'm in the mood for Italian food!（今日はイタリアンを食べたい気分なんだよね！）」",
      },
      {
        usage: "映画やカラオケの気分のとき \"In the mood for a movie\"（映画を見る気分）",
        example: "「放課後、何して遊ぶ？」「I'm in the mood for a scary movie tonight.（今夜はちょっとホラー映画を見たい気分かも）」",
      },
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
        example: "「このエリア、おしゃれなカフェ多いね」「I know my way around here, let me guide you!（私この辺の勝手よく知ってるから案内するよ！）」",
      },
      {
        usage: "ツールに詳しいとき \"Knows his way around Cursor\"（彼はCursorの使いこなしをよく知っている）",
        example: "「彼、プログラミング早いね」「Yeah, he really knows his way around Cursor.（うん、彼は本当にCursorの使いこなしをよく分かってるよね）」",
      },
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
        example: "「ピザもう1枚食べる？」「No thanks, I'm totally stuffed!（いや、ありがとう、もうマジでお腹パンパンだわ！）」",
      },
      {
        usage: "食べすぎたとき \"So stuffed\"（お腹がいっぱいすぎる）",
        example: "「ここのパスタ、量がすごかったね」「Yeah, I'm so stuffed I can't even move.（ね、お腹いっぱいすぎて動けないよ…笑）」",
      },
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
        example: "「デザートも注文する？」「I think I'll pass on dessert today, I'm on a diet.（今日はデザートはパスしておこうかな、ダイエット中だし）」",
      },
      {
        usage: "お誘いを断るとき \"Pass on the drink\"（お酒や飲み物を見送る）",
        example: "「もう1杯カフェラテ飲む？」「I'll pass, I've had enough caffeine.（私はパスしとく、カフェインもう十分摂ったから笑）」",
      },
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
        example: "「最近あの新しいイタリアン、人多いね」「Yeah, that restaurant is buzzing on Instagram right now.（うん、あそこ今インスタでめちゃくちゃバズって話題だからね）」",
      },
      {
        usage: "噂になっているとき \"Buzzing with excitement\"（ワクワクで盛り上がっている）",
        example: "「新しいAIツール、海外のDiscordですごいね」「The whole community is buzzing about it.（コミュニティ全体がその話題で持ちきりだよ）」",
      },
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
        example: "「ここのレストラン、高そうかな？」「Let's take a glance at the menu outside.（外にあるメニューをちょっとチラ見してみようよ）」",
      },
      {
        usage: "スマホの画面などを見せるとき \"Take a quick glance\"（一瞬パッと見る）",
        example: "「このプロンプト、どう思う？」「Let me take a quick glance at it.（どれ、ちょっとチラッと見せてみて）」",
      },
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
        example: "「じゃあ、今週末あのカフェに行こうね！」「Yes! I'm really looking forward to it!（うん！本当にめちゃくちゃ楽しみにしてる！）」",
      },
      {
        usage: "また遊ぼうねと言うとき \"Looking forward to hanging out again\"（また遊ぶのを楽しみにしてる）",
        example: "「今日は楽しかった、ありがとう！」「Me too! Looking forward to hanging out again soon!（私こそ！近いうちにまた遊べるの楽しみにしてるね！）」",
      },
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
        example: "「さっきのフレンチレストランどうだった？」「The food and service were absolutely flawless!（料理もサービスも本当に完璧で最高だったよ！）」",
      },
      {
        usage: "デザインやコードに無駄がないとき \"Flawless design\"（完璧なデザイン）",
        example: "「Cursorが作ってくれたUI、バグがないね」「Wow, it's a flawless design.（わお、完璧なデザインだね）」",
      },
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
        example: "「喉乾いたね」「Let's drop by the convenience store.（コンビニにちょっと立ち寄ろうよ）」",
      },
      {
        usage: "友達の家に遊びに行くとき \"Drop by my place\"（うちにちょっと寄りなよ）",
        example: "「放課後、暇だな〜」「Then drop by my place and let's play video games!（じゃあうちにちょっと寄りなよ、ゲームしようぜ！）」",
      },
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
        example: "「放課後の集まり、場所どこになった？」「Actually, it's still up in the air.（実は、まだどこにするか決まってなくて保留なんだよね）」",
      },
      {
        usage: "計画が未確定なとき \"Plan is up in the air\"（計画が宙に浮いている）",
        example: "「週末の旅行、ホテル予約した？」「No, our plan is still up in the air.（ううん、計画がまだはっきり決まってなくて宙に浮いた状態なんだ）」",
      },
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
        example: "「ここのお店、隠れ家みたいでいいね」「Yeah, it's small but very cozy.（ね、こぢんまりしてるけどすごく居心地がいいよね）」",
      },
      {
        usage: "家の中などが快適なとき \"Cozy room\"（居心地の良い部屋）",
        example: "「外、雨がすごくなってきたね」「Let's just stay inside this cozy cafe and chill.（この居心地のいいカフェの中にいて、まったり過ごそうよ）」",
      },
    ],
  },
];
