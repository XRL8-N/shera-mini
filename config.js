const CONFIG = {
    valentineName: "Sheraaa - mini",

    pageTitle: "Will You Be My Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💗', '💓', '🤍'],
        bears: ['🧸', '🌹']
    },

    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🌍💖",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🤍🤗🤍",
        backgroundImage: "https://res.cloudinary.com/dqkbsjtqe/image/upload/v1770887642/dsscefss_ibulro.webp"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dqkbsjtqe/video/upload/v1770883330/Ed_Sheeran_-_Photograph_Official_Lyric_Video_gknkob.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
