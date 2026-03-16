import { defineField, defineType } from 'sanity'

export const studioSchema = defineType({
  name: 'studio',
  title: 'Estudio / Sobre Mí',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Frase o Tagline',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Biografía',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'profileImage',
      title: 'Foto de Perfil',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email de Contacto',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono / WhatsApp',
      type: 'string',
    }),
  ],
})
