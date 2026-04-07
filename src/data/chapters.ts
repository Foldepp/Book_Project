export type Beduerfnis = 'runterkommen' | 'stabilisieren' | 'nachspueren';
export type Dauer = '2min' | '5min' | '10min';

export interface Chapter {
  nummer: number;
  slug: string;
  titel: string;
  kapitelkontext: string;
  beduerfnis: Beduerfnis;
  dauer: Dauer;
  audioUrl: string;
  textalternative: string;
  aktiv: boolean;
}

export const chapters: Chapter[] = [
  {
    nummer: 1,
    slug: '01',
    titel: 'Ankommen bei dir selbst',
    kapitelkontext:
      'Diese Übung lädt dich ein, aus dem Denk-Modus herauszutreten und ganz bei dir anzukommen — ohne Ziel, ohne Bewertung.',
    beduerfnis: 'stabilisieren',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Setz dich bequem hin, beide Füße flach auf dem Boden. Schließ die Augen oder senke den Blick.\n\nSpür zunächst deinen Atem — ohne ihn zu verändern. Beobachte einfach, wie er von selbst kommt und geht. Drei Atemzüge lang nur das.\n\nNun beginne einen sanften Bodyscan: Bring deine Aufmerksamkeit zu den Fußsohlen. Spür den Kontakt mit dem Boden oder den Schuhen. Wandere langsam nach oben — über die Unterschenkel, die Knie, die Oberschenkel. Wo bist du angespannt? Wo weich? Kein Verändern nötig, nur wahrnehmen.\n\nWeiter über den Bauch — hebt und senkt er sich beim Atmen? Über die Brust, die Schultern. Vielleicht nimmst du dort Spannung wahr. Lass die Schultern ganz sanft sinken, wenn das möglich ist.\n\nZum Schluss: Nimm deinen ganzen Körper als Einheit wahr. Spür, wo du den Stuhl oder den Boden berührst. Diese Berührungspunkte halten dich. Du bist hier.\n\nBleib noch einen Moment in dieser offenen, beobachtenden Haltung — ohne etwas tun zu müssen.',
    aktiv: true,
  },
  {
    nummer: 2,
    slug: '02',
    titel: 'Mein innerer Kritiker — ein Portrait',
    kapitelkontext:
      'Der innere Kritiker ist eine Stimme, die die meisten von uns kennen. Diese Übung hilft dir, sie klarer zu hören — und damit ein Stück weit mehr Abstand zu gewinnen.',
    beduerfnis: 'nachspueren',
    dauer: '5min',
    audioUrl: '',
    textalternative:
      'Nimm dir ein Notizbuch oder ein leeres Blatt Papier. Diese Übung funktioniert am besten, wenn du schreibst statt nur nachdenkst.\n\nFrage dich zunächst: Wie klingt mein innerer Kritiker? Ist die Stimme laut oder eher ein leises Raunen? Klingt sie wie jemand aus deiner Vergangenheit, oder ist sie eher gesichtslos?\n\nSchreib auf: Was sagt diese Stimme am häufigsten? Welche Sätze kommen immer wieder — über deine Fähigkeiten, dein Aussehen, deine Beziehungen, deinen Wert als Mensch?\n\nDann: Wann ist der Kritiker besonders laut? In welchen Situationen, bei welchen Menschen, zu welcher Tageszeit?\n\nUnd schließlich eine wichtige Frage: Gibt es Momente, in denen die Stimme leiser wird oder ganz schweigt? Was ist in diesen Momenten anders?\n\nLies am Ende noch einmal, was du geschrieben hast — nicht um dich zu verurteilen, sondern mit einer gewissen Neugierde. Du lernst gerade, wer da spricht.',
    aktiv: true,
  },
  {
    nummer: 3,
    slug: '03',
    titel: 'Begegnung mit dem Beschützer',
    kapitelkontext:
      'Der innere Kritiker bekämpft uns nicht — er versucht, uns zu schützen. Diese Imaginationsreise lädt dich ein, ihm als Gestalt zu begegnen, statt nur seine Stimme zu hören.',
    beduerfnis: 'nachspueren',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Setz dich bequem hin und schließ die Augen. Atme ein paarmal tief durch und lass den Alltag für einen Moment hinter dir.\n\nStell dir einen inneren Raum vor — einen Ort, an dem du dich sicher und ruhig fühlst. Das kann ein echtes Zimmer sein, ein Platz in der Natur oder ein Ort, den du dir einfach ausgedacht hast. Nimm dir einen Moment, um diesen Ort mit allen Sinnen zu spüren.\n\nNun lädst du deinen inneren Kritiker ein, in diesen Raum zu kommen — nicht als bedrohliche Stimme, sondern als Gestalt, als Figur. Wie sieht sie aus? Wie groß ist sie? Wie hält sie sich? Schau sie dir neugierig an, ohne zu werten.\n\nWenn die Gestalt vor dir steht, stelle ihr innerlich eine Frage: "Was versuchst du zu schützen? Was machst du dir Sorgen, wenn du schweigst?"\n\nHör, was kommt — in Bildern, Worten, Gefühlen. Manchmal ist die Antwort überraschend. Oft steckt hinter dem Kritiker eine alte Angst, eine Art Fürsorge aus einer anderen Zeit.\n\nBedanke dich innerlich bei der Gestalt. Du musst ihr nicht zustimmen — aber du kannst anerkennen, dass sie versucht, dir zu helfen, auch wenn die Methode nicht immer hilfreich ist.\n\nAtme tief durch und komm langsam zurück in den Raum.',
    aktiv: true,
  },
  {
    nummer: 4,
    slug: '04',
    titel: 'Mein inneres Kind begegnen',
    kapitelkontext:
      'Frühe Erfahrungen hinterlassen Spuren — in unseren Gedanken, unseren Gefühlen, unserem Selbstbild. Diese Übung schafft Raum für eine behutsame innere Begegnung.',
    beduerfnis: 'nachspueren',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Diese Übung ist intensiv — geh so weit, wie es sich für dich stimmig anfühlt. Du kannst jederzeit pausieren.\n\nSetz dich ruhig hin, schließ die Augen. Atme ein paarmal bewusst: ein — aus. Lass deinen Körper schwerer werden.\n\nStell dir nun vor, du siehst ein Kind vor dir. Nicht unbedingt eine konkrete Erinnerung — einfach ein Bild, ein Gefühl. Ein Kind, das du warst. Wie alt ist es? Wie sitzt oder steht es? Wie sieht es aus?\n\nSchau das Kind einfach an. Du musst nichts tun, nichts erklären. Nur da sein. Manchmal reicht das schon.\n\nWenn es sich richtig anfühlt: Setz dich innerlich neben das Kind. Nicht um Probleme zu lösen — nur um Gesellschaft zu leisten.\n\nDann, wenn du möchtest: Gibt es einen Satz, den du dem Kind sagen würdest? Einen Satz, den es damals vielleicht gebraucht hätte zu hören? Sag ihn innerlich, leise.\n\nBleib noch einen Moment in diesem Beieinandersein. Dann atme tief durch und komm langsam zurück. Vielleicht möchtest du dir nach der Übung etwas notieren.',
    aktiv: true,
  },
  {
    nummer: 5,
    slug: '05',
    titel: 'Vagusatmung — Nervensystem beruhigen',
    kapitelkontext:
      'Dein Atem ist der direkteste Weg zu deinem Nervensystem. Diese Übung nutzt das verlängerte Ausatmen, um deinen Körper aus dem Stressmodus zu führen.',
    beduerfnis: 'runterkommen',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Setz dich aufrecht hin, Füße flach auf dem Boden. Du kannst die Augen schließen oder den Blick senken.\n\nZunächst: Beobachte deinen natürlichen Atem für etwa zwei Minuten. Verändere nichts. Wie tief atmest du? Wo spürst du den Atem am deutlichsten — in der Nase, der Brust, dem Bauch?\n\nNun beginne mit dem Rhythmus 4–7–8:\n– Einatmen: zähle langsam bis 4\n– Halten: zähle bis 7\n– Ausatmen: zähle bis 8, so lange und sanft wie möglich\n\nWichtig: Das verlängerte Ausatmen ist das Entscheidende. Es aktiviert den Parasympathikus — dein körpereigenes Beruhigungssystem.\n\nWiederhole diesen Rhythmus sieben Minuten lang. Wenn 4–7–8 sich zu anstrengend anfühlt, verkürze auf 3–5–6. Der Schlüssel bleibt: Ausatmen immer länger als Einatmen.\n\nZum Schluss: Atme wieder normal und nimm wahr, was sich verändert hat. Vielleicht ist dein Kiefer weicher, die Schultern tiefer, der Kopf klarer. Gib dieser Veränderung einen Moment.',
    aktiv: true,
  },
  {
    nummer: 6,
    slug: '06',
    titel: 'Stressregulation — geführte Körperwahrnehmung',
    kapitelkontext:
      'Stress speichert sich im Körper — in Kiefer, Schultern, Bauch. Diese Übung führt dich zu deinen persönlichen Stressorten und zeigt dir, wie du mit dem Atem begleiten kannst.',
    beduerfnis: 'runterkommen',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Setz dich bequem hin oder leg dich hin. Schließ die Augen.\n\nBegin damit, drei tiefe Atemzüge zu nehmen. Dann lass den Atem wieder normal fließen.\n\nNun wandere mit deiner Aufmerksamkeit durch typische Stressorte im Körper:\n\nKiefer: Sind die Zähne leicht zusammengebissen? Lass den Kiefer ganz leicht fallen. Auch nur einen Millimeter reicht.\n\nSchultern: Ziehen sie nach oben, Richtung Ohren? Atme aus und lass sie sinken.\n\nBauch: Ist er angespannt, zusammengezogen? Atme in den Bauch hinein und spür, wie er sich weitet.\n\nHände: Sind die Fäuste leicht geschlossen? Öffne die Handflächen, leg sie locker auf die Oberschenkel.\n\nBei jedem Stressort: nicht kämpfen, nicht zwingen. Nur beobachten, ausatmen, begleiten.\n\nZum Schluss nimm deinen ganzen Körper als Einheit wahr — von den Füßen bis zum Scheitel. Spür, wie er insgesamt gehalten ist. Vielleicht ein bisschen leichter als am Anfang.',
    aktiv: true,
  },
  {
    nummer: 7,
    slug: '07',
    titel: 'Ressourcen aktivieren und verankern',
    kapitelkontext:
      'Positive Erfahrungen einfach denken reicht nicht — der Körper muss sie speichern. Diese Übung zeigt dir, wie das geht. Als Ergänzung gibt es eine zweite, kürzere Übung zum sicheren inneren Ort.',
    beduerfnis: 'nachspueren',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      '**Übung 7a — Ressourcen aktivieren (ca. 14 Min.)**\n\nDiese Übung folgt Rick Hansons Methode "Taking In the Good" — positive Erfahrungen nicht nur wahrnehmen, sondern körperlich speichern.\n\nSchritt 1: Ruf dir eine eigene Ressource in Erinnerung — einen Menschen, der dir Kraft gibt. Einen Ort, an dem du dich wohl fühlst. Eine Aktivität, bei der du aufgehst. Einen Moment, in dem du dich lebendig gefühlt hast.\n\nSchritt 2: Vertiefe das Erleben für 20–30 Sekunden. Wie fühlt sich diese Ressource im Körper an? Wo spürst du sie — im Bauch, in der Brust, in den Schultern? Lass das Gefühl größer werden, als ob du es in HD siehst.\n\nSchritt 3: Verankere die Erfahrung. Leg eine Hand auf das Herz. Atme das Gefühl ein. Lass es einsinken — von der Wahrnehmung in den Körper.\n\nWiederhole das mit einer zweiten oder dritten Ressource, wenn du möchtest.\n\n---\n\n**Übung 7b — Den sicheren Ort vertiefen (ca. 12 Min.)**\n\nEine reine Ankommensübung — kein Bearbeiten von Themen, nur Sicherheit herstellen.\n\nAtme drei Mal tief durch. Dann stell dir deinen sicheren inneren Ort vor — einen Ort, an dem du dich geborgen und ruhig fühlst. Das kann ein echtes Zuhause sein, ein Platz in der Natur, oder ein Ort, den du dir einfach ausgedacht hast.\n\nNimm diesen Ort mit allen Sinnen wahr: Was siehst du? Was hörst du? Wie fühlt sich die Luft an?\n\nBleib dort für einige Minuten. Wenn Gedanken kommen, lass sie ziehen und kehr zurück.\n\nZum Schluss: Wähle ein Signalwort für diesen Ort — einen Begriff, der ihn für dich zusammenfasst. Atme ihn ein. Dieses Wort kann dich jederzeit zurückbringen.',
    aktiv: true,
  },
  {
    nummer: 8,
    slug: '08',
    titel: 'Sicherheit im Körper finden',
    kapitelkontext:
      'Nach intensiver emotionaler Arbeit braucht der Körper Stabilisierung. Diese Übung hilft dir, körperliche Sicherheit herzustellen — sanft und ohne in Schmerzhaftes einzutauchen.',
    beduerfnis: 'stabilisieren',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Diese Übung ist bewusst sanft gehalten. Sie ist nicht dafür da, schwierige Gefühle zu bearbeiten — sondern dafür, Sicherheit zu spüren.\n\nSetz dich aufrecht hin. Beide Füße auf dem Boden. Spür den Kontakt — die Sohlen auf dem Boden, den Rücken an der Lehne, das Gewicht deines Körpers auf dem Stuhl.\n\nAtme nun mit verlängertem Ausatmen: ein — zwei — drei ein, aus — zwei — drei — vier — fünf. Wiederhole das fünf bis sieben Mal.\n\nDann: Leg eine Hand auf die Brust, eine auf den Bauch. Spür die Wärme deiner eigenen Hände. Spür, wie sich Brust und Bauch beim Atmen heben und senken.\n\nSag innerlich, leise: "Ich bin hier. Ich bin in Sicherheit. Das ist jetzt gerade ein schwieriger Moment — aber nur ein Moment."\n\nBleib in dieser Haltung — Hände auf dem Körper, Atem gleichmäßig — so lange, wie es sich gut anfühlt. Fünf Minuten. Zehn. Mehr, wenn du möchtest.\n\nEs braucht nichts gelöst zu werden. Es reicht, hier zu sein.',
    aktiv: true,
  },
  {
    nummer: 9,
    slug: '09',
    titel: 'Der innere Begleiter',
    kapitelkontext:
      'Was wäre, wenn neben dem inneren Kritiker noch eine andere Stimme in dir wohnt — eine, die dir wohlgesonnen ist? Diese Übung hilft dir, diese Stimme zu finden und zu stärken.',
    beduerfnis: 'nachspueren',
    dauer: '5min',
    audioUrl: '',
    textalternative:
      'Nimm dir Papier und Stift. Diese Übung hat drei Stufen — geh so weit, wie es sich stimmig anfühlt.\n\n**Kurzversion:** Stell dir vor, da wäre in dir eine Stimme, die dir wohlgesonnen ist. Nicht perfekt, nicht allwissend — aber freundlich und ehrlich. Was würde diese Stimme dir heute sagen? Schreib einen einzigen Satz auf.\n\n**Standard:** Beantworte diese fünf Fragen schriftlich:\n1. Wie klingt die Stimme deines inneren Begleiters — sanft, klar, warm, ruhig?\n2. Was sagt er/sie, wenn du dich klein fühlst?\n3. Was sagt er/sie, wenn du einen Fehler gemacht hast?\n4. Was sagt er/sie, wenn du zweiffelst, ob du gut genug bist?\n5. Welchen einen Satz könnte dein innerer Begleiter heute immer wieder sagen?\n\n**Vertiefung:** Wo im Körper ist dein innerer Begleiter präsent? Leg eine Hand dorthin. Spür, wie sich das anfühlt.\n\nLies am Ende durch, was du geschrieben hast. Diese Stimme ist real — sie gehört dir.',
    aktiv: true,
  },
  {
    nummer: 10,
    slug: '10',
    titel: 'Selbstmitgefühl-Meditation',
    kapitelkontext:
      'Selbstmitgefühl ist keine Schwäche — es ist eine Haltung, die sich trainieren lässt. Diese Meditation vertieft das, was du in Kapitel 9 über deinen inneren Begleiter entdeckt hast.',
    beduerfnis: 'nachspueren',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Setz dich bequem hin, schließ die Augen. Atme drei Mal tief durch.\n\nLeg eine Hand auf das Herz. Spür die Wärme, die leichte Schwere der Hand. Spür darunter deinen Herzschlag, wenn er spürbar ist.\n\nNun ruf deinen inneren Begleiter auf — die Stimme, die du in Kapitel 9 kennengelernt hast. Wie klingt sie? Wie fühlt sie sich an?\n\nStell dir vor, diese Stimme spricht jetzt mit dir — genau so, wie du es in Kapitel 9 aufgeschrieben hast. Hör die Worte. Nicht nur denken — hören, spüren.\n\nDann stell dir innerlich eine Frage: "Was brauche ich gerade?" Nicht was du leisten solltest, nicht was andere brauchen — was brauchst du, genau jetzt?\n\nLass eine Antwort kommen. Manchmal ist sie überraschend einfach: Ruhe. Wärme. Gesehen werden. Keine Aufgabe.\n\nBleib noch ein paar Minuten in dieser stillen Aufmerksamkeit. Hand auf dem Herz. Atem gleichmäßig.\n\nKomm dann langsam zurück.',
    aktiv: true,
  },
  {
    nummer: 11,
    slug: '11',
    titel: 'Loving-Kindness-Meditation',
    kapitelkontext:
      'Sich selbst aktiv Wohlwollen zu schenken fühlt sich für viele Menschen fremd an. Diese klassische Meditation macht genau das — als Übung, nicht als spontanes Gefühl.',
    beduerfnis: 'nachspueren',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Setz dich bequem hin, schließ die Augen. Atme ein paarmal tief durch und komm an.\n\nDiese Meditation arbeitet mit Sätzen. Sprich sie innerlich — langsam, ohne Druck. Es ist normal, wenn sich Widerstand meldet. Setz ihn einfach zur Seite und sprich die Sätze trotzdem.\n\n**Phase 1 — Wohlwollen für dich selbst:**\nSag innerlich:\n"Möge ich sicher sein."\n"Möge ich gesund sein."\n"Möge ich glücklich sein."\n"Möge ich mit Leichtigkeit leben."\n\nWiederhole die Sätze einige Minuten. Wenn ein Satz sich besonders widerständig anfühlt, bleib genau dort.\n\n**Phase 2 — Wohlwollen für jemanden, den du liebst:**\nDenk an einen Menschen, dem du von Herzen Gutes wünschst. Sprich die Sätze für ihn oder sie: "Möge er/sie sicher sein. Möge er/sie gesund sein..."\n\n**Phase 3 — Wohlwollen für jemand Neutrales:**\nDenk an jemanden, den du kaum kennst — den Nachbarn, die Kassiererin. Auch für diesen Menschen die Sätze sprechen.\n\n**Phase 4 — Wohlwollen für alle Wesen:**\n"Mögen alle Wesen sicher sein. Mögen alle Wesen mit Leichtigkeit leben."\n\nKomm dann langsam zurück.',
    aktiv: true,
  },
  {
    nummer: 12,
    slug: '12',
    titel: 'Glaubenssatz-Transformation',
    kapitelkontext:
      'Einen neuen Glaubenssatz über dich zu formulieren ist ein Anfang. Aber erst wenn er im Körper ankommt, beginnt die eigentliche Veränderung.',
    beduerfnis: 'nachspueren',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Nimm dir zunächst einen Moment, um den neuen Glaubenssatz aus Kapitel 11 zu wiederholen — den Satz, den du formuliert hast. Schreib ihn oben auf ein Blatt.\n\nNun die geführte Imagination:\n\nSchließ die Augen, atme tief durch. Lass deinen Körper schwerer werden.\n\nPhase 1 — Den alten Satz loslassen: Hör den alten Glaubenssatz innerlich — wie eine Stimme, die du kennst. Stell dir vor, du hast einen Regler, der diese Stimme leiser dreht. Nicht ausschalten — nur leiser. So leise, dass du sie kaum noch hörst.\n\nPhase 2 — Den neuen Satz verankern: Sprich den neuen Glaubenssatz innerlich. Dann frag dich: Wo sitzt dieser Satz im Körper? In der Brust? Im Bauch? In den Schultern? Leg eine Hand dorthin. Wie fühlt sich der neue Satz körperlich an — warm, leicht, stabil?\n\nPhase 3 — Dreifache Wiederholung: Sprich den neuen Satz dreimal innerlich, jedes Mal mit einer kurzen Pause und einem tiefen Atemzug dazwischen. Beim dritten Mal: Lass die Worte im Körper ankommen, wie Wasser, das einzieht.\n\nÖffne die Augen. Wie geht es dir?',
    aktiv: true,
  },
  {
    nummer: 13,
    slug: '13',
    titel: 'Grenzen verkörpern',
    kapitelkontext:
      'Grenzen setzen fällt vielen schwer — weil sie nie körperlich gespürt wurden. Diese Imagination macht Grenzen zu einer leiblichen Erfahrung, bevor der nächste schwierige Moment kommt.',
    beduerfnis: 'nachspueren',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Setz dich bequem hin, schließ die Augen. Atme ein paarmal tief durch.\n\nPhase 1 — Erdung und Raumwahrnehmung: Spür zunächst deinen Körper im Raum. Wo du sitzt, wie viel Platz du einnimmst. Stell dir vor, du kannst mit deiner Aufmerksamkeit den Raum um dich herum ertasten — einen Meter, zwei Meter.\n\nPhase 2 — Das Bild deiner Grenze: Stell dir ein inneres Bild für deine persönliche Grenze vor. Was kommt? Eine Linie auf dem Boden? Ein Lichtkreis um deinen Körper? Eine sanfte Membran? Es muss nicht logisch sein — nimm, was kommt.\n\nPhase 3 — Die Probe: Stell dir jetzt vor, jemand kommt auf dich zu — eine Person, bei der du manchmal Schwierigkeiten hast, Grenzen zu setzen. Die Person kommt näher. Wann wird es zu nah? Genau in diesem Moment: Sag innerlich "Stopp." Klar. Ruhig. Ohne Entschuldigung.\n\nBeobachte, was in deinem Körper passiert, wenn du dieses "Stopp" sagst. Wo spürst du Festigkeit? Wo spürst du Widerstand?\n\nAtme tief durch und komm zurück.',
    aktiv: true,
  },
  {
    nummer: 14,
    slug: '14',
    titel: 'Stärken-Imagination',
    kapitelkontext:
      'Eigene Stärken zu kennen ist gut. Sie körperlich zu erleben ist etwas anderes. Diese Übung macht einen Moment deiner Stärke so lebendig, dass er neuronal gespeichert wird.',
    beduerfnis: 'nachspueren',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Setz dich bequem hin, schließ die Augen. Atme ein paarmal tief durch.\n\nPhase 1 — Den Moment aufrufen: Denk an einen konkreten Moment, in dem du eine Stärke gezeigt hast. Nicht unbedingt ein großes Ereignis — auch eine kleine Situation reicht. Vielleicht hast du jemanden unterstützt. Etwas durchgehalten. Dich für dich selbst entschieden. Etwas geschafft, das dir schwer fiel.\n\nMach diesen Moment so konkret wie möglich: Wo warst du? Was war der Augenblick genau? Wer war dabei?\n\nPhase 2 — Das Erleben vertiefen: Geh mit deiner Aufmerksamkeit in diesen Moment hinein. Wie hat sich Kompetenz körperlich angefühlt? Warm, fest, aufrecht, leicht? Lass das Gefühl wachsen — wie wenn du einen Regler aufdrehst.\n\nPhase 3 — Einsinken lassen: Sag dir innerlich: "Das bin auch ich." Nicht als Behauptung — als Erinnerung. Diese Erfahrung ist real. Sie gehört zu dir.\n\nAtme tief und komm zurück.',
    aktiv: true,
  },
  {
    nummer: 15,
    slug: '15',
    titel: 'Sichere innere Bindung',
    kapitelkontext:
      'Sicherheit in Beziehungen beginnt mit einer inneren sicheren Basis. Diese Meditation hilft dir, genau das aufzubauen — unabhängig von äußeren Umständen.',
    beduerfnis: 'stabilisieren',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Setz dich bequem hin, schließ die Augen. Atme tief durch und komm an.\n\nPhase 1 — Erdung: Spür deinen Körper, den Kontakt mit dem Stuhl, dem Boden. Drei bewusste Atemzüge.\n\nPhase 2 — Eine sichere Person aufrufen: Denk an jemanden, bei dem du dich wirklich sicher gefühlt hast — oder fühlst. Jemand, bei dem du du selbst sein konntest. Das kann ein Mensch aus deiner Kindheit sein, ein Freund, ein Tier, eine Figur aus einem Buch. Lass das Bild aufsteigen.\n\nSpür das Sicherheitsgefühl, das mit dieser Person verbunden ist. Wie fühlt es sich im Körper an? Wärme? Entspannung? Öffnung?\n\nPhase 3 — Die Sicherheit verankern: Lass das Gefühl stärker werden. Atme es ein. Dann stell dir vor, wie du dieses Gefühl von der Person löst — wie ein Geschenk, das du angenommen hast und das jetzt dir gehört.\n\nSag innerlich: "Diese Sicherheit lebt in mir." Nicht weil die Person unwichtig ist — sondern weil du die Fähigkeit zur Sicherheit in dir trägst.\n\nBleib in diesem Gefühl. Komm dann langsam zurück.',
    aktiv: true,
  },
  {
    nummer: 16,
    slug: '16',
    titel: 'Stabilisierung für schwierige Momente',
    kapitelkontext:
      'Diese Übung ist für akute Krisen — wenn alles zu viel wird und du schnell Boden unter den Füßen brauchst. Sie funktioniert auch in der Bahn oder am Schreibtisch.',
    beduerfnis: 'runterkommen',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Du brauchst dafür keine besondere Umgebung. Sie funktioniert überall.\n\nPhase 1 — Sensorisches Grounding (5-4-3-Methode):\nNenne innerlich oder leise:\n5 Dinge, die du gerade siehst\n4 Geräusche, die du hörst\n3 Dinge, die du berühren oder spüren kannst\n\nNimm dir für jede Wahrnehmung einen kurzen Moment. Das bringt dich zurück in den gegenwärtigen Moment.\n\nPhase 2 — Atemregulation:\nAtme ein — zähle bis 4.\nAtme aus — zähle bis 8.\nWiederhole das fünf Mal.\n\nDas verlängerte Ausatmen aktiviert dein parasympathisches Nervensystem. Du musst nichts dafür tun — es passiert von selbst.\n\nPhase 3 — Stabilisierungssatz:\nSag dir innerlich:\n"Das ist ein schwieriger Moment. Nicht mein ganzes Leben. Nur ein Moment."\n\nAtme einmal tief durch.\n\nDas war es. Du kannst weitermachen.',
    aktiv: true,
  },
];
