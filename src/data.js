// prototype data

export const albums = [
  'South Wecyma',
  'Noreng Yebuleone Land',
  'Isle of Caitu Canmokraine',
  'Supuna',
  'Blicge Iranand',
  'Tutrea Telandsnited',
  'Bangcrada',
  'Vietco Wima',
  'Nique',
  'Inggy Ncipenabe',
  'Poge',
  'Tiusgeorni',
  'Mapu Briguare',
  'Costa Lysy Auchelles',
  'Central Gerthuamoacroastan',
  'Marel',
  'Aicroland Lands',
  'Dadcao Djislandszea',
  'Mayottena Meber',
  'Piaa',
  'Giaphithernrade',
  'Cador Grepo',
  'Mico',
  'Stinehong Jintarci',
  'Taco Tai',
  'Stanicia',
  'Rii Kirieast',
  'Blicprus Statesslefa',
  'Bepa Iirial',
  'Jiroon',
];

export const images = [
  'https://picsum.photos/400/250',
  'https://picsum.photos/360/250',
  'https://picsum.photos/420/250',
  'https://picsum.photos/200/250',
  'https://picsum.photos/380/250',
  'https://picsum.photos/100/250',
  'https://picsum.photos/370/250',
  'https://picsum.photos/410/250',
  'https://picsum.photos/320/250',
  'https://picsum.photos/250/250',
  'https://picsum.photos/390/250',
  'https://picsum.photos/430/250',
  'https://picsum.photos/280/250',
  'https://picsum.photos/640/250',
  'https://picsum.photos/120/250',
];



// data functions

export function getAlbums() {
  return albums.slice(0, 6).map(title => ({
    title,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    images: images.map(url => ({ url, hash: getHash(title + url) })).sort(() => .5 - Math.random()),
  }))
}


export function getHash(str = '') {
    let hash = 0;
    for (let i = 0, l = str.length; i < l; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
};


// other helpers

export function setImageHeight(px = 180) {
  document.documentElement.style.setProperty('--image-height', px + 'px');
}

export function setSidebarWidth(px = 250) {
  document.documentElement.style.setProperty('--sidebar-width', px + 'px');
}

export function setImageLayout(layout) {
  const list = document.body.classList;
  Array.from(list).forEach(cls => cls.startsWith('thumb-layout--') && list.remove(cls));
  list.add('thumb-layout--' + layout);
}
