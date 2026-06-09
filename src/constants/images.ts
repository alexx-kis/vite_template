import { generatePaths } from '@/utils/utils';
import { PREFIX } from './const';
import { Ext } from './enums';

// %======================== images ========================% //

const imagesPath = `.${PREFIX}/img`;

export const Path = {
  ICONS: `${imagesPath}/icons`,
};

// %------------------------ icons ------------------------% //
export const ICONS = generatePaths(Path.ICONS, ['icon-name'], Ext.SVG);
