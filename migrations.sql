



  conn = PG::Connection.open()


  conn.exec('CREATE DATABASE all_the_cards;')
  conn.close

  conn = PG::Connection.open(dbname: 'all_the_cards')
  conn.exec('CREATE TABLE cards (id PRIMARY SERIAL KEY, title VARCHAR(255), message VARCHAR(255));')
  conn.close
