const $inputName = document.getElementById('input-name');
const $resetButton = document.getElementById('reset-button');
const $formContainer = document.getElementsByClassName('box-wrapper__form')[0];
const $resultContainer = document.getElementsByClassName('box-wrapper__result')[0];
const $loadingContainer = document.getElementsByClassName('box-wrapper__loading')[0];
const $resultTextTop = document.getElementsByClassName('box-wrapper__result__text')[0];
const $resultTitle = document.getElementsByClassName('box-wrapper__result__title')[0];
const $twitterShareButton = document.getElementById('twitter-button');
const $whatsappShareButton = document.getElementById('whatsapp-button');
const url = '';
const khodams = [
  'alok jumsot',
  'kebab',
  'ambatukam',
  'cicak kaori',
  'komi kodok',
  'rengoku donat',
  'ceker babat',
  'ular kobra',
  'harimau rawr',
  'gilang senja',
  'gloo wal ep ep',
  'eko sate madura',
  'citra bubur manado',
  'nasi goreng',
  'pintu hitam',
  'loli legal',
  'keyboard rgb',
  'mak lampir',
  'kuntilanak',
  'pocong',
  'ular sunda',
  'harimau jawa',
  'kbbi',
  'ngawi musikal',
  'mas rusdi',
  'ak47',
  'denis beban',
  'cicak kecirit',
  'keset',
  'tutup panci',
  'antek antek israel',
  'wikipedia',
  'telur orak-arik',
  'sandal jepit',
  'sapu terbang',
  'roti tawar',
  'kerupuk udang',
  'tikus got',
  'lele muter',
  'kucing garong',
  'baju bolong',
  'layangan putus',
  'kambing kurus',
  'keju batangan',
  'sirkuit putus',
  'kursi patah',
  'meja hijau',
  'celana sobek',
  'tikus kantor',
  'lemari berisik',
  'gelas retak',
  'sendok bengkok',
  'holder manta',
  'iwan kebab',
  'mejikom',
  'bocil kripto',
  'mekleren',
  'laba laba sunda',
  'anggrek mekar pontianak',
  'kadal ngawi geal geol',
  'raja hitam',
  'raja negro',
  'bagas dribble',
  'uni bakwan',
  'kak gem',
  'kntolodon',
  'cicak sunda',
  'karet pentil',
  'kunci inggris',
  'stang motor',
  'motor supra',
  'shotgun',
  'bitcoin',
  'biawak sunda'

];


function sumAllCharCode(text) {
  if (text.length === 1) return text.charCodeAt(0);

  const chars = text.split('');
  const total = chars.reduce((p,a) => {
    return typeof p === 'string'
      ? p.charCodeAt(0) + a.charCodeAt(0)
      : p + a.charCodeAt(0);
  });

  return total;
}

$formContainer.addEventListener('submit', (e) => {
  e.preventDefault();

  $formContainer.classList.remove('box-wrapper__col--active');
  $resultContainer.classList.remove('box-wrapper__col--active');
  $loadingContainer.classList.add('box-wrapper__col--active');

  const name = $inputName.value.trim();
  const nameEscaped = $inputName.value
    .replace(/&#(.*);/g, '&#38;$1&#59;')
    .replace(/&(.*);/g, '&#38;&#35;$1&#59;')
    .replace(/</g, '&#60;')
    .replace(/>/g, '&#62;')
    .replace(/\//g, '&#47;');
  let index = sumAllCharCode(name);
  index = (index + (~index >>> 1)) % (khodams.length - 1);
  
  $resultTextTop.innerHTML = `Khodam yang ada di dalam diri "${nameEscaped}".`;
  $resultTitle.innerHTML = khodams[index];
  
  setTimeout(() => {
    document.title = `Khodam "${name}" yakni...`;
    $whatsappShareButton.href = `https://api.whatsapp.com/send/?text=Khodam ${name} adalah ✨${khodams[index]}✨. Cek khodam kamu di ${url}`;
    $twitterShareButton.href = `https://x.com/intent/post?url=${url}&text=Khodam ${name} adalah ✨${khodams[index]}✨`;

    $formContainer.classList.remove('box-wrapper__col--active');
    $resultContainer.classList.add('box-wrapper__col--active');
    $loadingContainer.classList.remove('box-wrapper__col--active');
  }, 1800);
});

$resetButton.addEventListener('click', () => {
  $formContainer.classList.add('box-wrapper__col--active');
  $resultContainer.classList.remove('box-wrapper__col--active');
  $loadingContainer.classList.remove('box-wrapper__col--active');
  $whatsappShareButton.href = '/';
  $twitterShareButton.href = '/';
  $resultTextTop.innerHTML = `Cek Khodam Online`;
});
