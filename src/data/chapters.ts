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
    titel: 'Ankommen im Atem',
    kapitelkontext:
      'Diese Übung lädt dich ein, für einen Moment innezuhalten und spürbar anzukommen — ganz gleich, wie viel gerade los ist.',
    beduerfnis: 'runterkommen',
    dauer: '5min',
    audioUrl: 'https://example.com/audio/01.mp3',
    textalternative:
      'Setz dich bequem hin oder leg dich hin. Schließ die Augen, wenn das für dich angenehm ist. Spür, wie dein Atem ganz von selbst fließt — ohne dass du etwas tun musst. Beobachte drei Atemzüge lang einfach nur, wie die Luft ein- und ausströmt. Wenn Gedanken kommen, lass sie ziehen wie Wolken und kehre sanft zum Atem zurück. Bleib so lange, wie es sich gut anfühlt.',
    aktiv: true,
  },
  {
    nummer: 2,
    slug: '02',
    titel: 'Der sichere Ort',
    kapitelkontext:
      'In dieser Übung findest du einen inneren Ort, der sich sicher und ruhig anfühlt — einen Ort, den du jederzeit wieder aufsuchen kannst.',
    beduerfnis: 'stabilisieren',
    dauer: '2min',
    audioUrl: 'https://example.com/audio/02.mp3',
    textalternative:
      'Schließ die Augen und stell dir einen Ort vor, an dem du dich sicher und wohl fühlst. Das kann ein echter Ort sein oder einer, den du dir ausgedacht hast. Nimm wahr, was du dort siehst, hörst und riechst. Spür, wie sich dein Körper in dieser Sicherheit anfühlt. Präge dir dieses Gefühl ein — du kannst es jederzeit wieder herbeirufen.',
    aktiv: true,
  },
  {
    nummer: 3,
    slug: '03',
    titel: 'Nachspüren und Loslassen',
    kapitelkontext:
      'Diese Übung gibt dir Raum, das Erlebte nachklingen zu lassen und sanft loszulassen, was du nicht mehr brauchst.',
    beduerfnis: 'nachspueren',
    dauer: '10min',
    audioUrl: '',
    textalternative:
      'Leg eine Hand auf dein Herz. Spür die Wärme deiner Hand. Frag dich leise: Was beschäftigt mich gerade? Lass die Antwort kommen, ohne sie zu bewerten. Dann stell dir vor, wie du das, was schwer ist, sanft auf den Boden legst — nicht weil es nicht wichtig wäre, sondern weil du eine Pause verdienst. Atme tief durch.',
    aktiv: false,
  },
];
