declare function create(o: object | null): void;

create({props: 0});
create(null);

create(42);
create('42');
create(false);
create(undefined);
