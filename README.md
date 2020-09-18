## Digital Spaniel

[Design Spec](https://xd.adobe.com/spec/0687a76c-0eaf-4837-5a9a-e1ffe3b4766e-70b6/specs/)

## Requirements

1. php 7.4^
2. Node 12^

## Setup for development

1. Run `composer install`
2. Create your environment file by running `cp .env.example .env`
3. Run `php artisan key:generate` and update your database details
4. Once the database is set up run `php artisan migrate:fresh`
5. Seed the database with `php artisan db:seed`
6. Run `npm install` then `npm run dev`
