import {supabase} from '@API';
import {APIResponse, SupabaseService} from '@app_types/api';

export class CMSService implements SupabaseService {
  tableName = 'info_cards' as const;
  getInfoCards = async () =>
    (await supabase.from(this.tableName).select()) as APIResponse<
      typeof this.tableName,
      'array'
    >;
}
