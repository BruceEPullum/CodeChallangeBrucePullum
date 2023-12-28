

drop table if exists  "public"."Customers";


CREATE TABLE "public"."Customers" (
    id INT GENERATED ALWAYS AS IDENTITY,
    firstname character(25) not null,
    lastname character(30) not null,
    email text not null,
    createddate TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    lastUpdated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Bruce', 'Pullum', 'bruce.pullum@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Stephanie', 'Pullum', 'Stephanie.pullum@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Dalton', 'Pullum', 'Dalton.pullum@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Andrew', 'Pullum', 'Andrew.pullum@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Aubrie', 'Pullum', 'Aubrie.pullum@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Madison', 'Pullum', 'Madison.pullum@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Andie', 'Pullum', 'Andie.pullum@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Mason', 'Pullum', 'Mason.pullum@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Addie', 'Pullum', 'Addie.pullum@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Vernon', 'Pullum', 'Vernon.pullum@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Janelle', 'Pullum', 'Janelle.pullum@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Vicky', 'Pickeriing', 'Vicky.Pickering@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Gary', 'Pickering', 'Gary.Pickering@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Julie', 'Sheedy', 'Julie.Sheedy@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Rod', 'Sheedy', 'Rod.Sheedy@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Jeff', 'Sheedy', 'Jeff.Sheedy@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Jay', 'Tinder', 'Jay.Tinder@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Jennifer', 'Tinder', 'Jennifer.Tinder@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Heath', 'Slain', 'Heath.Slain@fakeemail.com', current_timestamp);
insert into "public"."Customers"("firstname", "lastname", "email", "createddate")
values ('Ashley', 'Slain', 'Ashley.Slain@fakeemail.com', current_timestamp);

select * from "public"."Customers";
