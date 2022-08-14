import customExpress from '../config/customExpress.js'
import dbConnection from '../infraestrutura/database/dbConnection.js'
import chalk from 'chalk'
import bodyParser from 'body-parser'
import consign from 'consign'
import express from 'express'
import Tabela from '../infraestrutura/database/tabelas.js'

export {express, customExpress, dbConnection, chalk, bodyParser, consign, Tabela}
