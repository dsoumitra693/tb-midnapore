import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Trips')
    .items([
      S.documentTypeListItem('trip').title('Trips'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['trip'].includes(item.getId()!),
      ),
    ])
