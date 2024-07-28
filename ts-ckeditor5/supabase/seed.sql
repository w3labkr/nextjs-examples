----------------------------------------------------------------
--                                                            --
--                          Storage                           --
--                                                            --
----------------------------------------------------------------

delete from storage.objects where bucket_id = 'YOUR_BUCKET_ID';
delete from storage.buckets where id = 'YOUR_BUCKET_ID';

drop policy if exists "Public access for all users" on storage.objects;
drop policy if exists "User can upload in their own folders" on storage.objects;
drop policy if exists "User can update their own objects" on storage.objects;
drop policy if exists "User can delete their own objects" on storage.objects;

insert into storage.buckets (id, name, public) values ('YOUR_BUCKET_ID', 'YOUR_BUCKET_ID', true);

create policy "Public access for all users" on storage.objects
  for select to authenticated, anon using (bucket_id = 'YOUR_BUCKET_ID');
create policy "User can upload in their own folders" on storage.objects
  for insert to authenticated with check (bucket_id = 'YOUR_BUCKET_ID' and (storage.foldername(name))[1] = (select auth.uid()::text));
create policy "User can update their own objects" on storage.objects
  for update to authenticated using (owner_id = (select auth.uid()::text));
create policy "User can delete their own objects" on storage.objects
  for delete to authenticated using (owner_id = (select auth.uid()::text));
