from node:8

RUN mkdir /app
WORKDIR /app

COPY . /app/
RUN rm -rf package-lock.json
RUN rm -rf ./node_modules

RUN npm i

EXPOSE  3000

CMD npm run dev