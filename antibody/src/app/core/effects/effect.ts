import { Game } from '../game';

export interface Effect{
  displayText: string;
  action: string;
  duration: number;
  apply(game: Game): void;
  deactivate(game: Game): void;
}
