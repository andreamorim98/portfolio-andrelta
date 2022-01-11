import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const BIDIRECIONAL_VOID_DEFAULT: string = 'void <=> *';
export const VOID_DEFAULT: string = ':enter';
export const DEFAULT_VOID: string = ':leave';

export const ANIMACAO_FADE: any[] = [
  trigger('fade', [
    state('void', style({ opacity: 0 })),

    transition(BIDIRECIONAL_VOID_DEFAULT, [animate(2000)]),
  ]),
];

export const SLIDE_ESQUERDA: any[] = [
  query(
    BIDIRECIONAL_VOID_DEFAULT,
    style({ position: 'fixed', width: '100%' }),
    { optional: true }
  ),
  group([
    query(
      VOID_DEFAULT,
      [
        style({ transform: 'translateX(-100%)' }),
        animate('.3s ease-out', style({ transform: 'translateX(0%)' })),
      ],
      {
        optional: true,
      }
    ),
    query(
      DEFAULT_VOID,
      [
        style({ transform: 'translateX(0%)' }),
        animate('.3s ease-out', style({ transform: 'translateX(100%)' })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

export const SLIDE_DIREITA: any[] = [
  query(
    BIDIRECIONAL_VOID_DEFAULT,
    style({ position: 'fixed', width: '100%' }),
    { optional: true }
  ),
  group([
    query(
      VOID_DEFAULT,
      [
        style({ transform: 'translateX(100%)' }),
        animate('.3s ease-out', style({ transform: 'translateX(0%)' })),
      ],
      {
        optional: true,
      }
    ),
    query(
      DEFAULT_VOID,
      [
        style({ transform: 'translateX(0%)' }),
        animate('.3s ease-out', style({ transform: 'translateX(-100%)' })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];
