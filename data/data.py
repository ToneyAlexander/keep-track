import csv
import json


def convertRow4(val: str) -> str:
    if val == "\u2714":
        return "Completed"
    elif val == "/":
        return "In Progress"
    else:
        return val


with open('./data.csv', 'r') as file:
    csvreader=csv.reader(file, delimiter=',')
    next(csvreader)

    data_list: list[dict] = [
        {
            "agency": row[0],
            "subject": row[1].capitalize(),
            "title": row[2].capitalize(),
            "page": int(row[3]) if row[3].isdigit() else 0,
            "progress": convertRow4(row[4]),
            "notes": row[5],
            "link": row[6],
            "tags": list(dict.fromkeys([s[0].upper() + s[1:]
                for s in [row[0]] + row[1].split(", ")]))
        }
        for row in csvreader
    ]

with open('../src/data.js', 'w') as file:
    file.write("export const data = " + json.dumps(data_list, indent=2))
