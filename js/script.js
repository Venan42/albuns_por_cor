const COLORS = [
    {
        id: "vermelho",
        title: "VERMELHO",
        prefix: "01"
    },
    {
        id: "laranja",
        title: "LARANJA",
        prefix: "02"
    },
    {
        id: "amarelo",
        title: "AMARELO",
        prefix: "03"
    },
    {
        id: "verde",
        title: "VERDE",
        prefix: "04"
    },
    {
        id: "azul",
        title: "AZUL",
        prefix: "05"
    },
    {
        id: "roxo",
        title: "ROXO",
        prefix: "06"
    },
    {
        id: "rosa",
        title: "ROSA",
        prefix: "07"
    },
    {
        id: "bege",
        title: "BEGE",
        prefix: "08"
    },
    {
        id: "marrom",
        title: "MARROM",
        prefix: "09"
    },
    {
        id: "branco",
        title: "BRANCO",
        prefix: "10"
    },
    {
        id: "cinza",
        title: "CINZA",
        prefix: "11"
    },
    {
        id: "preto",
        title: "PRETO",
        prefix: "12"
    },
    {
        id: "colorido",
        title: "COLORIDO",
        prefix: "13"
    },
    {
        id: "favoritos",
        title: "FAVORITOS",
        prefix: "14"
    }
];

const PEOPLE = [

    {
        name: "Venan",
        folder: "venan",
        albums: {
            "01": {
                file: "01-pissinthewind.png",
                title: "Piss in The Wind"
            },
            "02": {
                file: "02-animals.png",
                title: "Animals"
            },
            "03": {
                file: "03-themountain.png",
                title: "The Mountain"
            },
            "04": {
                file: "04-acabouchorare.png",
                title: "Acabou Chorare"
            },
            "05": {
                file: "05-enemaofthestate.png",
                title: "Enema Of The State"
            },
            "06": {
                file: "06-grace.png",
                title: "Grace"
            },
            "07": {
                file: "07-godweensatan.png",
                title: "God Ween Satan"
            },
            "08": {
                file: "08-watershed.png",
                title: "Watershed"
            },
            "09": {
                file: "09-lacucaracha.png",
                title: "La Cucaracha"
            },
            "10": {
                file: "10-fleetwoodmac.png",
                title: "Fleetwood Mac"
            },
            "11": {
                file: "11-damnation.png",
                title: "Damnation"
            },
            "12": {
                file: "12-chocolatestarfish.png",
                title: "Chocolate Starfish And The Hot Dog Flavored Water"
            },
            "13": {
                file: "13-therainbowgoblins.png",
                title: "The Rainbow Goblins"
            },
            "14": {
                file: "14-dirt.png",
                title: "Dirt"
            }
        }
    },

    {
        name: "Fred",
        folder: "fred",
        albums: {
            "01": {
                file: "01-afeveryoucantsweatout.png",
                title: "A Fever You Can't Sweat Out"
            },
            "02": {
                file: "02-quebec.png",
                title: "Quebec"
            },
            "03": {
                file: "03-thevelvetundergroundnico.png",
                title: "The Velvet Underground & Nico"
            },
            "04": {
                file: "04-petsounds.png",
                title: "Pet Sounds"
            },
            "05": {
                file: "05-alucinacao.png",
                title: "Alucinação"
            },
            "06": {
                file: "06-mercurialworlddeluxe.png",
                title: "Mercurial World Deluxe"
            },
            "07": {
                file: "07-godweensatan.png",
                title: "God Ween Satan"
            },
            "08": {
                file: "08-intheaeroplaneoverthesea.png",
                title: "In the Aeroplane Over the Sea"
            },
            "09": {
                file: "09-mansbestfriend.png",
                title: "Man's Best Friend"
            },
            "10": {
                file: "10-twinfantasy.png",
                title: "Twin Fantasy"
            },
            "11": {
                file: "11-ilovemycomputer.png",
                title: "I Love My Computer"
            },
            "12": {
                file: "12-perverts.png",
                title: "Perverts"
            },
            "13": {
                file: "13-sgtpeppers.png",
                title: "Sgt. Pepper's"
            },
            "14": {
                file: "14-imaginaldisk.png",
                title: "Imaginal Disk"
            }
        }
    },

    {
        name: "Pedro Miguel",
        folder: "pedromiguel",
        albums: {
            "01": {
                file: "01-remaininlight.png",
                title: "Remain in Light"
            },
            "02": {
                file: "02-cinemabelico.png",
                title: "Cinema Bélico?"
            },
            "03": {
                file: "03-eunaosouboainfluencia.png",
                title: "Eu Não Sou Boa Influência Pra Você"
            },
            "04": {
                file: "04-osmutantes.png",
                title: "Os Mutantes"
            },
            "05": {
                file: "05-ventura.png",
                title: "Ventura"
            },
            "06": {
                file: "06-loki.png",
                title: "Loki?"
            },
            "07": {
                file: "07-quebec.png",
                title: "Quebec"
            },
            "08": {
                file: "08-themountain.png",
                title: "The Mountain"
            },
            "09": {
                file: "09-ilucifer.png",
                title: "I, Lucifer"
            },
            "10": {
                file: "10-umatardenafruteira.png",
                title: "Uma Tarde na Fruteira"
            },
            "11": {
                file: "11-hawaiipart2.png",
                title: "Hawaii Part II"
            },
            "12": {
                file: "12,14-thedarksideofthemoon.png",
                title: "The Dark Side of the Moon"
            },
            "13": {
                file: "13-inrainbows.png",
                title: "In Rainbows"
            },
            "14": {
                file: "12,14-thedarksideofthemoon.png",
                title: "The Dark Side of the Moon"
            }
        }
    },

    {
        name: "Pedro Daniel",
        folder: "pedrodaniel",
        albums: {
            "01": {
                file: "01-lonelypeoplewithpower.png",
                title: "Lonely People With Power"
            },
            "02": {
                file: "02-songsaboutleaving.png",
                title: "Songs About Leaving"
            },
            "03": {
                file: "03-alonelysinner.png",
                title: "A Lonely Sinner"
            },
            "04": {
                file: "04-luvsichexalogy.png",
                title: "Luv(sic) Hexalogy"
            },
            "05": {
                file: "05-98.12.28otokotachinowakare.png",
                title: "98.12.28 Otokotachino Wakare"
            },
            "06": {
                file: "06-hypnagogia.png",
                title: "Hypnagogia"
            },
            "07": {
                file: "07-flowerofthesoul.png",
                title: "Flower of the Soul"
            },
            "08": {
                file: "08,14-theglowpt2.png",
                title: "The Glow Pt. 2"
            },
            "09": {
                file: "09-galcosta.png",
                title: "Gal Costa"
            },
            "10": {
                file: "10-themoneystore.png",
                title: "The Money Store"
            },
            "11": {
                file: "11-allthingsmustpass.png",
                title: "All Things Must Pass"
            },
            "12": {
                file: "12-sobrevivendonoinferno.png",
                title: "Sobrevivendo no Inferno"
            },
            "13": {
                file: "13-recitalnaboitebarroco.png",
                title: "Recital na Boite Barroco"
            },
            "14": {
                file: "08,14-theglowpt2.png",
                title: "The Glow Pt. 2"
            }
        }
    },

    {
        name: "Pedro Leão",
        folder: "pedroleao",
        albums: {
            "01": {
                file: "01-whenthepawn.png",
                title: "When The Pawn..."
            },
            "02": {
                file: "02-avesangria.png",
                title: "Ave Sangria"
            },
            "03": {
                file: "03-thedreaming.png",
                title: "The Dreaming"
            },
            "04": {
                file: "04-popfood.png",
                title: "Pop Food"
            },
            "05": {
                file: "05-imaginaldisk.png",
                title: "Imaginal Disk"
            },
            "06": {
                file: "06-guts.png",
                title: "GUTS"
            },
            "07": {
                file: "07-pinkseason.png",
                title: "Pink Season"
            },
            "08": {
                file: "08-hilo.png",
                title: "HiLo"
            },
            "09": {
                file: "09-ilucifer.png",
                title: "I, Lucifer"
            },
            "10": {
                file: "10-houndsoflove.png",
                title: "Hounds of Love"
            },
            "11": {
                file: "11-thefamilyjewels.png",
                title: "The Family Jewels"
            },
            "12": {
                file: "12-mook.png",
                title: "Mook"
            },
            "13": {
                file: "13-adenseswarmofancientstars.png",
                title: "A Dense Swarm of Ancient Stars"
            },
            "14": {
                file: "14-hawaiipart2.png",
                title: "Hawaii Part 2"
            }
        }
    },

    {
        name: "Sofia",
        folder: "sofia",
        albums: {
            "01": {
                file: "01-aosvivos.png",
                title: "Ao Vivos"
            },
            "02": {
                file: "02-avesangria.png",
                title: "Ave Sangria"
            },
            "03": {
                file: "03-themountain.png",
                title: "The Mountain"
            },
            "04": {
                file: "04-clubedaesquina.png",
                title: "Clube da Esquina"
            },
            "05": {
                file: "05,14-alucinacao.png",
                title: "Alucinação"
            },
            "06": {
                file: "06-purpura.png",
                title: "Púrpura"
            },
            "07": {
                file: "07-hasos.png",
                title: "Hasos"
            },
            "08": {
                file: "08-bluesman.png",
                title: "Bluesman"
            },
            "09": {
                file: "09-krig-ha,bandolo.png",
                title: "Krig-Ha, Bandolo!"
            },
            "10": {
                file: "10-osorrisodogatodealice.png",
                title: "O Sorriso do Gato de Alice"
            },
            "11": {
                file: "11-opassodolui.png",
                title: "O Passo do Lui"
            },
            "12": {
                file: "12-thebends.png",
                title: "The Bends"
            },
            "13": {
                file: "13-dominguinho.png",
                title: "Dominguinho"
            },
            "14": {
                file: "05,14-alucinacao.png",
                title: "Alucinação"
            }
        }
    },

    {
        name: "Maria Clara",
        folder: "mariaclara",
        albums: {
            "01": {
                file: "01-rebelyell.png",
                title: "Rebel Yell"
            },
            "02": {
                file: "02-thekickinside.png",
                title: "The Kick Inside"
            },
            "03": {
                file: "03-novoaeon.png",
                title: "Novo Aeon"
            },
            "04": {
                file: "04-thequeenisdead.png",
                title: "The Queen Is Dead"
            },
            "05": {
                file: "05-strangerinthealps.png",
                title: "Stranger in the Alps"
            },
            "06": {
                file: "06-grace.png",
                title: "Grace"
            },
            "07": {
                file: "07-sotonightthatimightsee.png",
                title: "So Tonight That I Might See"
            },
            "08": {
                file: "08-dois.png",
                title: "Dois"
            },
            "09": {
                file: "09-hardtoimagine.png",
                title: "Hard to Imagine the Neighbourhood Ever Changing"
            },
            "10": {
                file: "10-okcomputer.png",
                title: "OK Computer"
            },
            "11": {
                file: "11-ultraviolence.png",
                title: "Ultraviolence"
            },
            "12": {
                file: "12-everybodyelseisdoingit,sowhycantwe.png",
                title: "Everybody Else Is Doing It..."
            },
            "13": {
                file: "13-deathofapartygirl.png",
                title: "Death of a Party Girl"
            },
            "14": {
                file: "14-punisher.png",
                title: "Punisher"
            }
        }
    },

    {
        name: "Duda",
        folder: "duda",
        albums: {
            "01": {
                file: "01-theartofsurvival.png",
                title: "The Art of Survival"
            },
            "02": {
                file: "02-sketchesformysweetheartthedrunk.png",
                title: "Sketches for My Sweetheart the Drunk"
            },
            "03": {
                file: "03-cancoesdeapartamento.png",
                title: "Canções de Apartamento"
            },
            "04": {
                file: "04-thejawsoflife.png",
                title: "The Jaws of Life"
            },
            "05": {
                file: "05-melodrama.png",
                title: "Melodrama"
            },
            "06": {
                file: "06-zeros.png",
                title: "Zeros"
            },
            "07": {
                file: "07-worldwidetorture.png",
                title: "Worldwide Torture"
            },
            "08": {
                file: "08-tellmeimpretty.png",
                title: "Tell Me I'm Pretty"
            },
            "09": {
                file: "09-bluesman.png",
                title: "Bluesman"
            },
            "10": {
                file: "10-omyheart.png",
                title: "O My Heart"
            },
            "11": {
                file: "11-egodeathatabacheloretteparty.png",
                title: "Ego Death at a Bachelorette Party"
            },
            "12": {
                file: "12-divino.png",
                title: "Divino"
            },
            "13": {
                file: "13-atrasdoportotemumacidade.png",
                title: "Atrás do Porto Tem Uma Cidade"
            },
            "14": {
                file: "14-viciousdelicious.png",
                title: "Vicious Delicious"
            }
        }
    }
]

function createCard(person, album) {

    return `
        <article class="album-card">

            <img
                loading="lazy"
                src="img/${person.folder}/${album.file}"
                alt="${album.title}"
            >

            <h3>${person.name}</h3>

            <p>${album.title}</p>

        </article>
    `;

}

COLORS.forEach(color => {

    const section = document.getElementById(color.id);

    if (!section) return;

    section.innerHTML = `
        <h2>${color.title}</h2>
        <div class="album-grid"></div>
    `;

    const grid = section.querySelector(".album-grid");

    PEOPLE.forEach(person => {

        const album = person.albums[color.prefix];

        if (album) {
            grid.innerHTML += createCard(person, album);
        }

    });

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        document
            .querySelectorAll(".timeline a")
            .forEach(a => a.classList.remove("active"));

        const active = document.querySelector(`.timeline a[href="#${entry.target.id}"]`);

        if (active) {
            active.classList.add("active");
        }

    });

}, {
    threshold: .6
});

document
    .querySelectorAll(".slide")
    .forEach(slide => observer.observe(slide));
